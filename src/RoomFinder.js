import React, { Component } from 'react';

import MultiSelect from './MultiSelect';

import './css/mainPageStyles.css'

class RoomFinder extends Component {
    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title black-text">Заселение</span>
                                <MultiSelect hintText="Общежития" items={['6', '7', '8', '9']} />
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
