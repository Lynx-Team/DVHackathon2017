import React, { Component } from 'react';
import Room from '../build/contracts/Room.json'; 
import Resident from '../build/contracts/Resident.json';

import './css/mainPageStyles.css'
import ResidentDiv from './ResidentDiv';
import TittleDiv from './TittleDiv'
import RoomInfo from './RoomInfo'



class SwapQueryCard extends Component {

    constructor(){
        super();
        this.state = {
        	size: null,
            fullness: null,
            sex: null,
            isFind: false,
        	roomInfo: null,
        	queriesBlocks: null
        };
        this.showRoomInfo = this.showRoomInfo.bind(this);
        this.query = this.query.bind(this);
        var adr = window.residentInstance.address;
        var ref = window.db.ref().child('SwapQueries').child(adr); 
        this.queries = ref.once('value');
        this.record = null;
    }

    showRoomInfo(e, record) {
    	var self = this;
    	var gender = ['Пустая', 'М', 'Ж'];
    	window.campusInstance.GetRoomInfo(self.record.dorm, self.	record.room, (err, res) => {
            self.setState({
                size: res[0].toNumber(),
                fullness: res[1].toNumber(),
                sex: gender[res[2].toNumber()],
                isFind: res[3],
                members: self.state.members,
                roomInfo: <RoomInfo dorNumber={self.record.dorm} roomNumber={self.record.room} 
                            size={res[0].toNumber()} fullness={res[1].toNumber()} sex={gender[res[2].toNumber()]} isFind={res[3]} members={[]} />,
                queriesBlocks: self.state.queriesBlocks
            });

            window.campusInstance.GetRoom(self.record.dorm, self.record.room, function(err, res) {
                    let roomAddr = res;
                    let roomInstance = window.web3RPC.eth.contract(Room.abi).at(roomAddr);

                    
                    for(let i = 0; i < self.state.fullness; i++) {
                        roomInstance.GetResident(i, function (err, res) { 
                            let resAddr = res;
                            let resInstance = window.web3RPC.eth.contract(Resident.abi).at(resAddr);

                            resInstance.login(function (err, res) { 
                                let arr = "undefined" === typeof self.state.members ? [] : self.state.members;
                                self.setState({
                                    size: self.state.size,
                                    fullness: self.state.fullness,
                                    sex: self.state.sex,
                                    isFind: self.state.isFind,
                                    members: [...arr, window.users.get(res).FIO],
                                    roomInfo: <RoomInfo dorNumber={self.record.dorm} roomNumber={self.record.room} 
                                        size={self.state.size} fullness={self.state.fullness} sex={self.state.sex} isFind={self.state.isFind} members={[...arr, window.users.get(res).FIO]} />,
                                    queriesBlocks: self.state.queriesBlocks
                                });
                            });
                        });
                    }
            });
        });
    }

    componentWillMount() {
        var self = this;
        this.queries.then(function(res){

        	self.queriesBlocks = [];
        	self.record = res.val();
        	self.queriesBlocks.push(self.query(res.val()));
        	self.setState({
        		roomInfo: self.state.roomInfo,
        		queriesBlocks: self.queriesBlocks
        	});
        });	
    }

    query(record) {
    	var numberRoom = record.dorm + '.' + record.room;
        return (
            <div>
                <div className="row">
                    <ResidentDiv i="1" login="Приходько О.Д."/>
                    <div className="col s12">
                        <div className="s6 offset-s2">
                            Комната
                        </div>
                        <div className="s6 offset-s2">
                            <a className="waves-effect waves-light btn" onClick={(e) => this.showRoomInfo(e, record.room)}>{numberRoom}</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4 l4">
                        <a className="waves-effect waves-light btn">Принять</a>
                    </div>
                    <div className="col s12 m4 l4">
                        <a className="waves-effect waves-light btn veto">Отклонить</a>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col s6 m4 l5 offset-l1 kek1">
                    <div className="card">
                        <div className="card-content">
                            <TittleDiv text="Запросы на обмен комнатами"/>
                            {this.state.queriesBlocks}
                        </div>
                    </div>
                </div>
                {this.state.roomInfo}
            </div>
        );
    }
}

export default SwapQueryCard;
