import React, { Component } from 'react';

import './css/mainPageStyles.css'

class AuthCard extends Component {
    constructor(props, context) {
        super(props, context); 
        this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3000"));
    }
    EnterClick() {
        console.log(this.web3);
        

        const provider = new this.web3.providers.HttpProvider('http://localhost:3000');
        const contract = require('truffle-contract');
        const Resident = contract(ResidentContract);
        Resident.setProvider(provider);

        const web3RPC = new Web3(provider);

        var ResidentInstance;

        var pass = document.getElementById("password");
        var name = document.getElementById("firstname");
        console.log(pass.value);
        console.log(name.value);
        web3RPC.eth.getAccounts(function(error, accounts) {
            console.log(accounts);
        });
        this.props.auth();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title black-text">Войти</span>
                                <form>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input placeholder="Логин" id="firstname" type="text" className="validate"/>
                                                <label htmlFor="firstname" className="active">Логин</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <input placeholder="Пароль" id="password" type="password" className="validate"/>
                                                <label htmlFor="password" className="active">Пароль</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="card-action">
                                <input type="submit" className="btn" value="Войти" onClick={(e) => this.EnterClick(e)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthCard;
