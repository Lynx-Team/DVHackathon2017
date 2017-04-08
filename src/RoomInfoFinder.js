import React, { Component } from 'react';

import './css/mainPageStyles.css';
import Select from './Select';
import RoomInfo from './RoomInfo';
import TittleDiv from './TittleDiv'

class RoomInfoFinder extends Component {
    constructor() {
        super();

        this.items = ['6', '7', '8', '9'];
        this.selected = 0;
        this.state = {roomInfo: null};
        this.showRoomInfo = this.showRoomInfo.bind(this);
        this.selectChanged = this.selectChanged.bind(this);
    }

    showRoomInfo() {
        this.setState({roomInfo: <RoomInfo dorNumber={this.items[this.selected]}
            roomNumber={this.roomNumber.value} isUpdate="true"/>})
    }

    selectChanged(event, key, payload) {
        this.selected = key;
    }

    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col s12 m5 offset-l1">
                        <div className="card">
                            <div className="card-content">
                                <TittleDiv text="Выберите комнату"/>
                                <Select hintText="Номер общежития" items={this.items}
                                    onChange={this.selectChanged} />
                                <form>
                                    <div className="input-field">
                                        <input placeholder="Введите номер комнаты" type="text"
                                            className="validate" ref={(input) =>
                                            { this.roomNumber = input; }}/>
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
