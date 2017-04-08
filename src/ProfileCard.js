import React, { Component } from 'react';

import './css/mainPageStyles.css'
import ResidentDiv from './ResidentDiv';
import FieldDiv from './FieldDiv'
import TittleDiv from './TittleDiv'

class ProfileCard extends Component {
    constructor() {
        super();

        var self = this;

        this.state = {
            myRoomText: ""
        }

        window.residentInstance.roomNum(function(err, res) {
            self.setState({
                myRoomText: "Моя комната: " + (res.toNumber() === 0 ? "'не заселен'" : res.toString())
            });

        });
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 m4 l10 offset-l1">
                    <div className="card">
                        <div className="card-content">
                            <TittleDiv text={this.state.myRoomText}/>
                            <FieldDiv text="Кол-во проживающих: "/>
                            <FieldDiv text="Пол: "/>
                            <ResidentDiv />
                            <ResidentDiv />
                        </div>
                        <div className="card-action">
                            <input type="submit" className="btn" value="Выселиться" onClick={this.props.auth}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileCard;

