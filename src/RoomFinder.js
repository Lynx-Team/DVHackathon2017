import React, { Component } from 'react';

import './css/mainPageStyles.css'

class RoomFinder extends Component {
    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title black-text">Выберите общежитие</span>
                                    <select multiple>
                                        <option value="" disabled>Номер общежития</option>
                                        <option value="1">8.2</option>
                                        <option value="2">8.1</option>
                                        <option value="3">6.1</option>
                                    </select>
                            </div>
                            <div className="card-action">
                                <input type="submit" className="btn" value="показать свободные комнаты"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomFinder;
