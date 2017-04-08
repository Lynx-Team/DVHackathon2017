import React, { Component } from 'react';
import Web3 from 'web3';
import Campus from '../build/contracts/Campus.json';

import AuthCard from './AuthCard';
import RoomFinder from './RoomFinder';
import RoomInfoFinder from './RoomInfoFinder';
import NewsCard from './NewsCard'
import ProfileCard from "./ProfileCard";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {state: 'NOT_AUTH'};

        this.chooseSettling = this.chooseSettling.bind(this);
        this.chooseInfo = this.chooseInfo.bind(this);
        this.home = this.home.bind(this);
        this.profile = this.profile.bind(this);

        let web3RPC = window.web3;

        if (typeof web3RPC !== 'undefined') {
            web3RPC = new Web3(web3RPC.currentProvider);
        } else {
            console.log('No web3? You should consider trying MetaMask!')
            web3RPC = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }

        web3RPC.eth.defaultAccount = web3RPC.eth.accounts[0];
        window.web3RPC = web3RPC;
        window.campusContractAddr = '0x845c2e1404bdd16a9f8ec70d2269e45a017afba5';
        let campusInstance = window.web3RPC.eth.contract(Campus.abi).at(window.campusContractAddr);
        window.campusInstance = campusInstance;
    }

    home() {
        this.setState({state: 'HOME'});
    }

    profile() {
        this.setState({state: 'PROFILE'});
    }

    chooseSettling() {
        this.setState({state: 'SETTLING'});
    }

    chooseInfo() {
        this.setState({state: 'INFO'});
    }


    render() {
        let content = null;

        switch (this.state.state) {
            case 'NOT_AUTH':
                content = <AuthCard auth={this.home} />
                break;
            case 'HOME':
                content = <NewsCard />
                break;
            case 'SETTLING':
                content = <RoomFinder />
                break;
            case 'INFO':
                content = <RoomInfoFinder />
                break;
            case 'PROFILE':
                content = <ProfileCard />
                break;
            default:
                content = <h1>Error!!!</h1>
        }

        let menu = null;
        if (this.state.state !== 'NOT_AUTH') {
            menu = (
            <div className="row">
                <nav className="col s12 m4 l10 offset-l1">
                    <div className="nav-wrapper">
                        <a href="" className="brand-logo right">Общежитие ДВФУ</a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a onClick={this.home}>Главная</a></li>
                            <li><a onClick={this.chooseInfo}>Информация о комнатах</a></li>
                            <li><a onClick={this.profile}>Профиль</a></li>
                            <li><a onClick={this.chooseSettling}>Заселение</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            );
        }

        return(
            <div>
                {menu}
                {content}
            </div>
        );
    }
}

export default App;
