import React, { Component } from 'react';

import './css/mainPageStyles.css';
import ResidenDiv from './ResidentDiv'
import FieldDiv from './FieldDiv'
import TittleDiv from './TittleDiv'
import Preload from './Preload'
import Room from '../build/contracts/Room.json'


class RoomInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: null,
            fullness: null,
            sex: null,
            isFind: null
        }

        this.updateInfo = this.updateInfo.bind(this);
        this.settle = this.settle.bind(this);
    }

    settle() {
        window.campusInstance.GetRoom(this.props.dorNumber, this.props.roomNumber, function(err, res) {
            let roomAddr = res;
            let roomInstance = window.web3RPC.eth.contract(Room.abi).at(roomAddr);

            roomInstance.AddResident(window.residentInstance.address, function (err, res) {
                console.log(err, res);
            });
        });
    }

    updateInfo() {
        var dorNumber = this.props.dorNumber;
        var roomNumber = this.props.roomNumber;
        var sex = ['Пустая', 'М', 'Ж'];
        var self = this;

        window.campusInstance.GetRoomInfo.call(dorNumber, roomNumber, (err, res) => {
            self.setState({
                size: res[0].toNumber(),
                fullness: res[1].toNumber(),
                sex: sex[res[2].toNumber()],
                isFind: res[3]
            });
        });
    }

    render() {
        let answer;
        let tittle = "Комната номер " + this.props.dorNumber + "." + this.props.roomNumber;
        if (this.props.isUpdate) {
            this.updateInfo();
            this.props = {
                dorNumber: this.props.dorNumber,
                roomNumber: this.props.roomNumber,
                isUpdate: false
            };
        }

        if (this.state.isFind == null) {
            answer = (
                <Preload />
            );
        }
        else if (this.state.isFind) {
            let txt = "Заселенность: " +  this.state.fullness + "/" + this.state.size;
            let txt1 = "Пол: " +  this.state.sex;

            answer = (
                <div>
                <form>
                    <FieldDiv text={txt} />
                    <FieldDiv text={txt1} />
                </form>
                    <ResidenDiv />
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
                            onClick = {this.settle}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomInfo;
