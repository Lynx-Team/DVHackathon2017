import React, { Component } from 'react';

import './css/mainPageStyles.css'

class ModCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title black-text">Выберите режим</span>
                                <div className="card-action">
                                    <input type="submit" className="btn col s12 m6 l5" onClick={this.props.chooseSettling}
                                        value="Заселиться"/>
                                    <div className="col s12 m6 l2"></div>
                                    <input type="submit" className="btn col s12 m6 l5" onClick={this.props.chooseInfo}
                                        value="Информация"/>
                                </div>
                                <div className="card">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModCard;
