import React, { Component } from 'react';

import './css/mainPageStyles.css'

class AdminMessage extends Component {
    constructor(){
        super()
    }

    render() {
        return (
                <div className="row">
                    <div className="card-content">
                        <p>{this.props.Date}</p>
                        <p>{this.props.text}</p>
                        <hr/>
                    </div>
                </div>
        );
    }
}

export default AdminMessage;