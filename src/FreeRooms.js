import React, { Component } from 'react';
import TittleDiv from './TittleDiv'
//import RoomInfo from './RoomInfo'

class RoomFinder extends Component {
    constructor(props) {
        super(props);

        this.state = {roomInfo: null};
        this.showButton = this.showButton.bind(this);
        this.row = this.row.bind(this);
    }

    showRoomInfo() {
        // this.setState({roomInfo: <RoomInfo dorNumber={this.items[this.selected]}
        //                                    roomNumber={this.roomNumber.value} isUpdate="true"/>})
    }

    showButton(name) {
        return (
            <div className="col s12 m4 l4">
                <a className="waves-effect waves-light btn">{name}</a>
            </div>
        );
    }

    row(button1,button2,button3) {
        return (
            <div className="row">
                {button1}
                {button2}
                {button3}
            </div>
        );
    }

    render() {
        this.buttons = [];
        this.buttonRows = [];

        for (var i = 0; i < 10; i++) {
            this.buttons.push(this.showButton("name"))
        }

        for (var i = 0; i < this.buttons.length; i+=3) {
            this.buttonRows.push(this.row(this.buttons[i],this.buttons[i + 1],this.buttons[i + 2]))
        }

        return (
            <div className="">
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
                <div>{this.state.roomInfo}</div>
            </div>
        );
    }
}

export default RoomFinder;
