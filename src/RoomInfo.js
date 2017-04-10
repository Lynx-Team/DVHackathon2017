import React, { Component } from 'react';
import Room from '../build/contracts/Room.json'; 
import Resident from '../build/contracts/Resident.json';

import './css/mainPageStyles.css';
import ResidentDiv from './ResidentDiv'
import FieldDiv from './FieldDiv'
import TittleDiv from './TittleDiv'
import Preload from './Preload'

class RoomInfo extends Component {
    constructor() {
        super();

        this.updateInfo = this.updateInfo.bind(this);
        this.settle = this.settle.bind(this);
    }

    settle() {
        window.campusInstance.GetRoom(this.props.dorNumber, this.props.roomNumber, function(err, res) {
            let roomAddr = res;
            let roomInstance = window.web3RPC.eth.contract(Room.abi).at(roomAddr);
            roomInstance.AddResident(window.residentInstance.address, function (err, res) { });
        });
    }

    updateInfo() {
        var dorNumber = this.props.dorNumber;
        var roomNumber = this.props.roomNumber;
        var gender = ['Пустая', 'М', 'Ж'];
        var self = this;

        window.campusInstance.GetRoomInfo.call(dorNumber, roomNumber, (err, res) => {
            self.setState({
                size: res[0].toNumber(),
                fullness: res[1].toNumber(),
                sex: gender[res[2].toNumber()],
                isFind: res[3],
                members: this.state.members
            });
        });
    }

    render() {
        let answer;
        var residents;
        let tittle = "Комната номер " + this.props.dorNumber + "." + this.props.roomNumber;

        if (this.props.isFind == null) {
            answer = (
                <Preload />
            );
        }
        else if (this.props.isFind) {
            let txt = "Заселенность: " +  this.props.fullness + "/" + this.props.size;
            let txt1 = "Пол: " +  this.props.sex;
            var login;
            var self = this;



            var rows = [];
            if (this.props.members !== null) {
                for (let i = 0; i < this.props.members.length; i++) {
                    rows.push(<ResidentDiv i={i + 1} login={this.props.members[i]}/>);
                }
            }

            answer = (
                <div>
                <form>
                    <FieldDiv text={txt} />
                    <FieldDiv text={txt1} />
                </form>
                   {residents}
                   {rows}
                </div>
            );
        }
        else {
            answer = (<h3><span>Комната не найдена</span></h3>);
        }

        return (
            <div className="col s6 m6 l6">
                <div className="card">
                    <div className="card-content">
                        <TittleDiv text={tittle}/>
                        {answer}
                    </div>
                    <div className="card-action">
                        <input type="submit" className="btn" value="Заселиться в комнату"
                            onClick={this.settle}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomInfo;
