import React, { Component } from 'react';

import './css/mainPageStyles.css'

class RoomInfo extends Component {
    render() {
        return (
            <div className="col s12 m5">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title black-text">Комната номер ....</span>
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
