import React, { Component } from 'react';

import './css/mainPageStyles.css'

class TittleDiv extends Component {
    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <span className="card-title black-text col s12">Название чего-то</span>
                </div>
                <hr/>
            </div>
        );
    }
}

export default TittleDiv;