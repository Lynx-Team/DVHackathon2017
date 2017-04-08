import React, { Component } from 'react';

import './css/mainPageStyles.css'

class ResidentDiv extends Component {
    render() {
        return (
            <div>
                <div className="row"></div>
                <div className="row">
                   <div className="input-field">
                        <input value="Resident Name here" id="name" type="text" className="validate" readOnly/>
                        <label className="active" htmlFor="name">Житель №...</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResidentDiv;