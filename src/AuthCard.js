import React, { Component } from 'react';

import './css/mainPageStyles.css'

class AuthCard extends Component {
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
                                <input type="submit" className="btn" value="Войти"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthCard;