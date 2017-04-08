import React, { Component } from 'react';

import MultiSelect from './MultiSelect';
import TittleDiv from './TittleDiv'
import FreeRooms from './FreeRooms'

import './css/mainPageStyles.css'

class RoomFinder extends Component {

    constructor() {
        super();
        this.state = {freeRooms: null};
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
                                <TittleDiv text="Выберите общажите"/>
                                <MultiSelect hintText="Общежития" items={['6', '7', '8', '9']} />
                            </div>
                            <div className="card-action">
                                <input type="submit" className="btn" value="показать свободные комнаты" onClick={this.showFreeRooms}/>
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
