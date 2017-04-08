import React, { Component } from 'react';
import TittleDiv from './TittleDiv'
import RoomInfo from './RoomInfo'

class RoomFinder extends Component {
    constructor(props) {
        super(props);

        this.state = {roomInfo: null};

        this.maxRoomsOnFloor = 50;
        this.maxFloors = 5;
        this.buttonRows = [];

        this.showButton = this.showButton.bind(this);
        this.showRoomInfo = this.showRoomInfo.bind(this);
        this.row = this.row.bind(this);
    }

    showRoomInfo(e, room) {
        console.log(e);
        this.setState({roomInfo: <RoomInfo dorNumber={this.props.dormitory}
                                           roomNumber={room} isUpdate="true"/>})
    }

    showButton(name) {
        return (
            <div className="col s12 m4 l4">
                <a className="waves-effect waves-light btn" onClick={(e) => this.showRoomInfo(e, name)}>{name}</a>
            </div>
        );
    }

    row(button1, button2, button3) {
        return (
            <div className="row">
                {button1}
                {button2}
                {button3}
            </div>
        );
    }

    updateRooms() {
        let buttons = [];
        this.buttonRows = [];

        for (let i = 1; i < this.maxFloors; i++) {
            for (let j = 1; j < this.maxRoomsOnFloor; j++) {
                let room = i * 100 + j;
                buttons.push(this.showButton(room + ''));
            }
        }

        for (let i = 0; i < buttons.length; i += 3) {
            this.buttonRows.push(this.row(buttons[i], buttons[i + 1], buttons[i + 2]))
        }
    }

    render() {
        if (this.props.isUpdate) {
            this.updateRooms();
            this.props = {isUpdate: false, dormitory: this.props.dormitory};
        }

        return (
            <div className="">
                <div>{this.state.roomInfo}</div>
                <div className="row">
                    <div className="col s12 m4 offset-l1">
                        <div className="card">
                            <div className="card-content">
                                <TittleDiv text="Свободные комнаты"/>
                                <div className="row">
                                    {this.buttonRows}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomFinder;
