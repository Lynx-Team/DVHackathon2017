import React, { Component } from 'react';

import './css/mainPageStyles.css'
import ResidentDiv from './ResidentDiv';
import FieldDiv from './FieldDiv'
import TittleDiv from './TittleDiv'
import Room from '../build/contracts/Room.json';
import Resident from '../build/contracts/Resident.json';

class ProfileCard extends Component {
    constructor() {
        super();

        this.state = {
            myRoom: '-',
            myDerm: '-',
            capacity: 0,
            occupancy: 0,
            gender: '-',
            isFound: false,
            members: []
        };

        var self = this;
        window.residentInstance.roomNum(function(err, res) {
            self.setState({
                myRoom: res.toNumber() === 0 ? '-' : res.toNumber(),
                myDerm: self.state.myDerm
            });

            window.residentInstance.dormNum(function(err, res) {
                self.setState({
                    myRoom: self.state.myRoom,
                    myDerm: res.toNumber() === 0 ? '-' : res.toNumber()
                });

                if (self.state.myRoom === '-' || self.state.myDerm === '-')
                    return;

                window.campusInstance.GetRoomInfo(self.state.myDerm, self.state.myRoom, function(err, res) {
                    if (res[3]) {
                        var occupancy = res[1].toNumber();

                        window.campusInstance.GetRoom(self.state.myDerm, self.state.myRoom,
                            function(err, res) {
                                let roomInst = window.web3RPC.eth.contract(Room.abi).at(res);
                                for (let i = 0; i < occupancy; i++) {
                                    roomInst.rs(i, function(err, res) {
                                        let residentInstance = window.web3RPC.eth.contract(Resident.abi).at(res);
                                        residentInstance.login(function(err, res) {
                                            self.setState({
                                                myRoom: self.state.myRoom,
                                                myDerm: self.state.myDerm,
                                                capacity: self.state.capacity,
                                                occupancy: self.state.occupancy,
                                                gender: self.state.gender,
                                                isFound: self.state.isFound,
                                                members: [...self.state.members, res]
                                            });
                                        });
                                    });
                                }
                            });

                        self.setState({
                            myRoom: self.state.myRoom,
                            myDerm: self.state.myDerm,
                            capacity: res[0].toNumber(),
                            occupancy: res[1].toNumber(),
                            gender: res[2].toNumber() === 0 ? 'Пустая' : res[2].toNumber() === 1 ? 'М' : 'Ж',
                            isFound: true,
                            members: self.state.members
                        });
                    }
                    else {
                        self.setState({
                            myRoom: self.state.myRoom,
                            myDerm: self.state.myDerm,
                            capacity: 0,
                            occupancy: 0,
                            gender: '-',
                            isFound: false,
                            members: self.state.members
                        });
                    }
                });
            });
        });
    }

    render() {
        let rows = [];
        for (let i = 0; i < this.state.members.length; i++) {
            rows.push(<ResidentDiv i={i + 1} login={this.state.members[i]}/>);
        }

        return (
            <div className="row">
                <div className="col s12 m4 l10 offset-l1">
                    <div className="card">
                        <div className="card-content">
                            <TittleDiv text={"Корпус:" + this.state.myDerm + " | Комната:" + this.state.myRoom}/>
                            <FieldDiv text={"Макслимальное кол-во проживающих: " + this.state.capacity}/>
                            <FieldDiv text={"Кол-во проживающих: " + this.state.occupancy}/>
                            <FieldDiv text={"Пол: " + this.state.gender}/>
                            {rows}
                        </div>
                        <div className="card-action">
                            <input type="submit" className="btn" value="Выселиться" onClick={this.props.auth}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCard;
