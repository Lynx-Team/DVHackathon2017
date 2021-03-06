import React, { Component } from 'react';

import Select from './Select';
import TittleDiv from './TittleDiv'
import FreeRooms from './FreeRooms'

import './css/mainPageStyles.css'

class RoomFinder extends Component {
    constructor() {
        super();
        this.state = {freeRooms: null};
        this.dormitories = ['6', '7', '8', '9'];
        this.selected = 0;
        this.selectChanged = this.selectChanged.bind(this);
        this.showFreeRooms = this.showFreeRooms.bind(this);
    }

    showFreeRooms() {
        this.setState({freeRooms: <FreeRooms dormitory={this.dormitories[this.selected]} isUpdate="true"/>})
    }

    selectChanged(event, key, payload) {
        this.selected = key;
    }

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col s5 m5 l5 offset-s1">
                        <div className="card">
                            <div className="card-content">
                                <TittleDiv text="Выберите общежитие"/>
                                <Select hintText="Общежития" items={this.dormitories}
                                    onChange={this.selectChanged}/>
                            </div>
                            <div className="card-action">
                                <input type="submit" className="btn" value="Показать свободные комнаты" onClick={this.showFreeRooms}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.state.freeRooms}
                </div>
            </div>
        );
    }
}

export default RoomFinder;
