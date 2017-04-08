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

        const provider = new Web3.providers.HttpProvider('http://localhost:8545');
        const contract = require('truffle-contract');
        const campus = contract(Campus);
        campus.setProvider(provider);
        const web3RPC = new Web3(provider);

        var campusInstance;
        var dorNumber = this.props.dorNumber;
        var roomNumber = this.props.roomNumber;
        var sex = ['Пустая', 'М', 'Ж'];
        var self = this;

        this.state = {
            size: null,
            fullness: null,
            sex: null,
            isFind: false
        }

        campus.deployed().then(function(instance) {
            campusInstance = instance;
            return campusInstance.getRoomInfo.call(dorNumber, roomNumber);
        }).then(function(res) {
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

        if (!this.state.isFind) {
            answer = (
                <div>
                <form>
                    <div className="row">
                        <div className="input-field s12 m6">
                           <span className="">Заселенность: {this.state.fullness}/{this.state.size}</span>
                         </div>
                    </div>
                    <div className="row">
                        <div className="input-field s12 m6">
                          <span className="title black-text row s12 m4">Пол: {this.state.sex}</span>
                        </div>
                    </div>
                    <FieldDiv />
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
                        <TittleDiv />
                        <span className="card-title black-text">Комната номер {this.props.roomNumber}</span>
                        <hr/>
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
