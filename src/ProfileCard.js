import React, { Component } from 'react';

import './css/mainPageStyles.css'
import ResidentDiv from './ResidentDiv';
import FieldDiv from './FieldDiv'
import TittleDiv from './TittleDiv'

class ProfileCard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m4 l10 offset-l1">
                    <div className="card">
                        <div className="card-content">
                            <TittleDiv text="Моя комната"/>
                            <FieldDiv text="Номер комнаты: "/>
                            <FieldDiv text="Заселенность: "/>
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

