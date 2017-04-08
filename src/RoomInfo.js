import React, { Component } from 'react';

import './css/mainPageStyles.css';
import Campus from '../build/contracts/Campus.json';
import Web3 from 'web3';
import ResidenDiv from './ResidentDiv'
import FieldDiv from './FieldDiv'
import TittleDiv from './TittleDiv'


class RoomInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: null,
            fullness: null,
            sex: null,
            isFind: false
        }

        this.updateInfo = this.updateInfo.bind(this);
    }

    updateInfo() {
        var web3RPC = window.web3;

        if (typeof web3RPC !== 'undefined') {
            web3RPC = new Web3(web3RPC.currentProvider);
        } else {
            console.log('No web3? You should consider trying MetaMask!')
            web3RPC = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        web3RPC.eth.defaultAccount = web3RPC.eth.accounts[0];

        var campusInstance = web3RPC.eth.contract(Campus.abi).at('0x845c2e1404bdd16a9f8ec70d2269e45a017afba5');
        var dorNumber = this.props.dorNumber;
        var roomNumber = this.props.roomNumber;
        var sex = ['Пустая', 'М', 'Ж'];
        var self = this;

        campusInstance.GetRoomInfo.call(dorNumber, roomNumber, (err, res) => {
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

        if (this.state.isFind) {
            let txt = "Заселенность: " +  this.state.fullness + "/" + this.state.size;
            let txt1 = "Пол: " +  this.state.sex;

            answer = (
                <div>
                <form>
                    <FieldDiv text={txt}/>
                    <FieldDiv text={txt1}/>
                </form>
                    <ResidenDiv />
                </div>
            );
        }
        else {
            answer = (<h3><span>Комната не найдена</span></h3>);
        }

        return (
            <div className="col s12 m5">
                <div className="card">
                    <div className="card-content">
                        <TittleDiv text={tittle}/>
                        {answer}
                    </div>
                    <div className="card-action">
                        <input type="submit" className="btn" value="Заселиться в комнату"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomInfo;
