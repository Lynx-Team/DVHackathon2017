import React, { Component } from 'react';
import TittleDiv from './TittleDiv'

import './css/mainPageStyles.css'

class NewsCard extends Component {
    render() {
        return (
                <div className="row">
                    <div className="col s12 m4 l10 offset-l1">
                        <div className="card">
                            <div className="card-content">
                                <TittleDiv text="Объявления"/>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default NewsCard;

