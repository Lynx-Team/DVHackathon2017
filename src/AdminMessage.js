import React, { Component } from 'react';

import './css/mainPageStyles.css'

class AdminMessage extends Component {
    render() {
        return (
                <div className="row">
                    <div className="card-content">
                        <p>18.12.2017</p>
                        <p>Сегодня уборка во всех комнатах с 15:30 до 18:30</p>
                        <hr/>
                    </div>
                </div>
        );
    }
}

export default AdminMessage;