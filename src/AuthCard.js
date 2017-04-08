import React, { Component } from 'react';

import './css/mainPageStyles.css'
import TittleDiv from "./TittleDiv";

class AuthCard extends Component {
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
                                            <input id="icon_prefix" type="text" className="validate"/>
                                            <label htmlFor="icon_prefix">Логин</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                           <i className="material-icons prefix">vpn_key</i>
                                            <input id="icon_prefix" type="password" className="validate"/>
                                            <label htmlFor="icon_prefix">Пароль</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="card-action">
                                <input type="submit" className="btn" value="Войти" onClick={this.props.auth}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthCard;
