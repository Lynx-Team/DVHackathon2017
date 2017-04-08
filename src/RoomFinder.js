import React, { Component } from 'react';

import MultiSelect from './MultiSelect';
import TittleDiv from './TittleDiv'
import FreeRooms from './FreeRooms'

import './css/mainPageStyles.css'

class RoomFinder extends Component {
    constructor() {
        super();
        this.state = {freeRooms: null};
        this.dormitories = ['6', '7', '8', '9'];
        this.showFreeRooms = this.showFreeRooms.bind(this);
    }

    showFreeRooms() {
        this.setState({freeRooms: <FreeRooms />})
    }

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col s12 m4 offset-l1">
                        <div className="card">
                            <div className="card-content">
                                <TittleDiv text="Выберите общежитие"/>
                                <MultiSelect hintText="Общежития" items={this.dormitories} />
                            </div>
                            <div className="card-action">
                                <input type="submit" className="btn" value="Показать свободные комнаты" onClick={this.showFreeRooms}/>
                            </div>
                        </div>
                    </div>
                    <div>{this.state.freeRooms}</div>
                </div>
            </div>
        );
    }
}

export default RoomFinder;
