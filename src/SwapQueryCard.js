import React, { Component } from 'react';

import './css/mainPageStyles.css'
import ResidentDiv from './ResidentDiv';
import TittleDiv from './TittleDiv'
import RoomInfo from './RoomInfo'



class SwapQueryCard extends Component {

    constructor(){
        super();
        this.state = {roomInfo: null};
        this.showRoomInfo = this.showRoomInfo.bind(this);
        this.query = this.query.bind(this);
    }

    showRoomInfo(e, room) {
        console.log(e);
        this.setState({roomInfo: <RoomInfo dorNumber={this.props.dormitory}
                                           roomNumber={room} isUpdate="true"/>})
    }

    query() {
        if (this.props.isUpdate) {
            this.updateRooms();
            this.props = {isUpdate: false, dormitory: this.dormitory};
        }
        return (
            <div>
                <div className="row">
                    <ResidentDiv/>
                    <div className="col s12">
                        Общежитие номер ...
                    </div>
                    <div className="col s12">
                        <div className="s6 offset-s2">
                            Комната
                        </div>
                        <div className="s6 offset-s2">
                            <a className="waves-effect waves-light btn" onClick={(e) => this.showRoomInfo(e, 100 + '')}>100</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m4 l4">
                        <a className="waves-effect waves-light btn">Принять</a>
                    </div>
                    <div className="col s12 m4 l4">
                        <a className="waves-effect waves-light btn veto">Отклонить</a>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }

    render() {
        var querys = [];
        let querysNumber = 10;
        for (var i = 0; i < querysNumber; i++){
            querys.push(this.query())
        }

        return (
            <div className="row">
                <div className="col s6 m4 l5 offset-l1 kek1">
                    <div className="card">
                        <div className="card-content">
                            <TittleDiv text="Запросы на обмен комнатами"/>
                            {querys}
                        </div>
                    </div>
                </div>
                {this.state.roomInfo}
            </div>
        );
    }
}

export default SwapQueryCard;
