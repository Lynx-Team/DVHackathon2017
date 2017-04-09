import React, { Component } from 'react';

import './css/mainPageStyles.css'
import ResidentDiv from './ResidentDiv';
import FieldDiv from './FieldDiv'
import TittleDiv from './TittleDiv'

class ProfileCard extends Component {
    constructor() {
        super();

        this.state = {
            myRoom: '-',
            myDerm: '-',
            capacity: 0,
            occupancy: 0,
            gender: '-',
            isFound: false
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
                        let occupancy = res[1].toNumber();

                        for (let i = 0; i < occupancy; i++) {

                        }

                        self.setState({
                            myRoom: self.state.myRoom,
                            myDerm: self.state.myDerm,
                            capacity: res[0].toNumber(),
                            occupancy: res[1].toNumber(),
                            gender: res[2].toNumber() === 0 ? 'Пустая' : res[2].toNumber() === 1 ? 'М' : 'Ж',
                            isFound: true
                        });
                    }
                    else {
                        self.setState({
                            myRoom: self.state.myRoom,
                            myDerm: self.state.myDerm,
                            capacity: 0,
                            occupancy: 0,
                            gender: '-',
                            isFound: false
                        });
                    }
                });
            });
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m4 l10 offset-l1">
                    <div className="card">
                        <div className="card-content">
                            <TittleDiv text={"Корпус:" + this.state.myDerm + " | Комната:" + this.state.myRoom}/>
                            <FieldDiv text={"Макслимальное кол-во проживающих: " + this.state.capacity}/>
                            <FieldDiv text={"Кол-во проживающих: " + this.state.occupancy}/>
                            <FieldDiv text={"Пол: " + this.state.gender}/>
                            <ResidentDiv />
                            <ResidentDiv />
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
