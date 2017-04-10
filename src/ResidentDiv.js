import React, { Component } from 'react';

import './css/mainPageStyles.css'

class ResidentDiv extends Component {
    render() {
        return (
            <div>
                <div className="row"></div>
                <div className="row">
                   <div className="input-field">
                        <input value={this.props.login} id="name" type="text" readOnly/>
                        <label className="active" htmlFor="name">Житель: {this.props.name}</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResidentDiv;
