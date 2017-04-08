import React, { Component } from 'react';

import './css/mainPageStyles.css';
import MultiSelect from './MultiSelect';
import RoomInfo from "./RoomInfo";

class RoomInfoFinder extends Component {
    constructor() {
        super();

        this.state = {roomInfo: null};
        this.showRoomInfo = this.showRoomInfo.bind(this);
    }

    showRoomInfo() {
        this.setState({roomInfo: <RoomInfo />})
    }

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col s12 m5">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title black-text">Информация о комнате</span>
                                <MultiSelect hintText="Номер общежития" items={['6', '7', '8', '9']} />
                                <form>
                                    <div className="input-field">
                                        <input placeholder="Введите номер комнаты" id="roomNumber" type="text"
                                            className="validate"/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-action">
                                <input type="submit" className="btn" value="Показать информацию"
                                    onClick={this.showRoomInfo}/>
                            </div>
                        </div>
                    </div>
                    <div>{this.state.roomInfo}</div>
                </div>
            </div>
        );
    }
}

export default RoomInfoFinder;
