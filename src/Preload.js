import React, { Component } from 'react';

import './css/mainPageStyles.css'

class Preload extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 l1 offset-l5">
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                                <div className="gap-patch">
                                    <div className="circle"></div>
                                </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Preload;
