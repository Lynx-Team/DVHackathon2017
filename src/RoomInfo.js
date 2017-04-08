import React, { Component } from 'react';

import './css/mainPageStyles.css';
import Campus from '../build/contracts/Campus.json';
import Web3 from 'web3';

class RoomInfo extends Component {
    constructor(props) {
        super(props);
        const provider = new Web3.providers.HttpProvider('http://localhost:8545');
        const contract = require('truffle-contract');
        const campus = contract(Campus);
        campus.setProvider(provider);
        const web3RPC = new Web3(provider);
        var campusInstance;

        campus.deployed().then(function(instance) {
            campusInstance = instance;
        });
    }

    render() {
        return (
            <div className="col s12 m5">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title black-text">Комната номер {this.props.roomNumber}</span>
                        <form>
                        <div className="input-field s12 m6">
                            <span className="">Заселенность: 2/2</span>
                        </div>
                        <div className="input-field s12 m6">
                            <span className="title black-text row s12 m4">Пол: Ж</span>
                        </div>
                        </form>
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
