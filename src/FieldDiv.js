import React, { Component } from 'react';

import './css/mainPageStyles.css'

class FieldDiv extends Component {
    render() {
        return (
            <div className="row">
                <div className="input-field s12 m6">
                    <span className="title black-text row s12 m4">{this.props.text}</span>
                </div>
            </div>
        );
    }
}

export default FieldDiv;