import React, { Component } from 'react';

import './css/mainPageStyles.css'

class TittleDiv extends Component {

    render() {
        return (
            <div className="row">
                <div className="row"></div>
                <div className="input-field">
                    <span className="card-title black-text">{this.props.text}</span>
                </div>
                <hr/>
            </div>
        );
    }
}

export default TittleDiv;
