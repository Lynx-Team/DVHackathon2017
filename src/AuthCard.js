import React, { Component } from 'react';
import Resident from '../build/contracts/Resident.json';

import './css/mainPageStyles.css'
import TittleDiv from "./TittleDiv";

class AuthCard extends Component {
    constructor(props, context) {
        super(props, context);

        this.authentication = this.authentication.bind(this);
    }

    authentication () {
        let login = this.login.value;
        let pass  = this.password.value;
        let residentAddress;

        for (let i = 0; i < window.users.length; i++) {
            if (login === window.users[i].login) {
                if (pass === window.users[i].password) {
                    window.campusInstance.ResidentExists.call(login, function(err, res) {
                        if (res) {
                            window.campusInstance.GetResident.call(login, function(err, res){
                                window.residentInstance = window.web3RPC.eth.contract(Resident.abi).at(res);
                            });
                        }
                        else {
                            window.campusInstance.RegisterResident(window.users[i].gender, login, function(err, res) {
                                window.campusInstance.GetResident.call(login, function(err, res){
                                    window.residentInstance = window.web3RPC.eth.contract(Resident.abi).at(res); 
                                });   
                            })
                        }
                    });
                }        
            }
        }

        this.props.auth();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card">
                            <div className="card-content">
                                <TittleDiv text="Общежития ДВФУ"/>
                                <form>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input id="icon_prefix" type="text" className="validate" ref={(input) => { this.login = input; }} />
                                            <label htmlFor="icon_prefix">Логин</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                           <i className="material-icons prefix">vpn_key</i>
                                            <input id="icon_prefix" type="password" className="validate" ref={(input) => { this.password = input; }} />
                                            <label htmlFor="icon_prefix">Пароль</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="card-action">
                                <input type="submit" className="btn" value="Войти" onClick={this.authentication}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthCard;
