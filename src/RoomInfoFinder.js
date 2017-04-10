import React, { Component } from 'react';
import Room from '../build/contracts/Room.json'; 
import Resident from '../build/contracts/Resident.json';

import './css/mainPageStyles.css';
import Select from './Select';
import RoomInfo from './RoomInfo';
import TittleDiv from './TittleDiv'

class RoomInfoFinder extends Component {
    constructor() {
        super();

        this.items = ['6', '7', '8', '9'];
        this.selected = 0;
        this.state = {
            size: 0,
            fullness: 0,
            sex: 0,
            isFind: false,
            members: null,
            roomInfo: null
        };

        this.showRoomInfo = this.showRoomInfo.bind(this);
        this.selectChanged = this.selectChanged.bind(this);
        this.render = this.render.bind(this);
    }

    showRoomInfo() {
        var dorNumber = this.items[this.selected];
        var roomNumber = this.roomNumber.value;
        var gender = ['Пустая', 'М', 'Ж'];
        var self = this;

        self.setState({
            size: self.state.size,
            fullness: self.state.fullness,
            sex: self.state.sex,
            isFind: self.state.isFind,
            members: null,
            roomInfo: self.state.roomInfo
        });

        window.campusInstance.GetRoomInfo(dorNumber, roomNumber, (err, res) => {
            self.setState({
                size: res[0].toNumber(),
                fullness: res[1].toNumber(),
                sex: gender[res[2].toNumber()],
                isFind: res[3],
                members: self.state.members,
                roomInfo: <RoomInfo dorNumber={self.items[self.selected]} roomNumber={self.roomNumber.value} 
                            size={res[0].toNumber()} fullness={res[1].toNumber()} sex={gender[res[2].toNumber()]} isFind={res[3]} members={[]} />
            });

            window.campusInstance.GetRoom(dorNumber, roomNumber, function(err, res) {
                    let roomAddr = res;
                    let roomInstance = window.web3RPC.eth.contract(Room.abi).at(roomAddr);

                    
                    for(let i = 0; i < self.state.fullness; i++) {
                        roomInstance.GetResident(i, function (err, res) { 
                            let resAddr = res;
                            let resInstance = window.web3RPC.eth.contract(Resident.abi).at(resAddr);

                            resInstance.login(function (err, res) { 
                                let arr = self.state.members === null ? [] : self.state.members;
                                self.setState({
                                    size: self.state.size,
                                    fullness: self.state.fullness,
                                    sex: self.state.sex,
                                    isFind: self.state.isFind,
                                    members: [...arr, window.users.get(res).FIO],
                                    roomInfo: <RoomInfo dorNumber={self.items[self.selected]} roomNumber={self.roomNumber.value} 
                                        size={self.state.size} fullness={self.state.fullness} sex={self.state.sex} isFind={self.state.isFind} members={[...arr, window.users.get(res).FIO]} />
                                });
                            });
                        });
                    }
            });
        });
    }

    selectChanged(event, key, payload) {
        this.selected = key;
    }

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col s12 m5 offset-l1">
                        <div className="card">
                            <div className="card-content">
                                <TittleDiv text="Выберите комнату"/>
                                <Select hintText="Номер общежития" items={this.items}
                                    onChange={this.selectChanged} />
                                <form>
                                    <div className="input-field">
                                        <input placeholder="Введите номер комнаты" type="text"
                                            className="validate" ref={(input) =>
                                            { this.roomNumber = input; }}/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-action">
                                <input type="submit" className="btn" value="Показать информацию"
                                    onClick={this.showRoomInfo}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        {this.state.roomInfo}
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomInfoFinder;