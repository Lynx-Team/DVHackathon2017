import React, { Component } from 'react';

import AuthCard from './AuthCard';
import ModCard from "./ModCard";
import RoomFinder from './RoomFinder';
import RoomInfoFinder from './RoomInfoFinder';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {state: 'NOT_AUTH'};

        this.auth = this.auth.bind(this);
        this.chooseSettling = this.chooseSettling.bind(this);
        this.chooseInfo = this.chooseInfo.bind(this);
    }

    auth() {
        this.setState({state: 'AUTH'});
    }

    chooseSettling() {
        this.setState({state: 'SETTLING'});
    }

    chooseInfo() {
        this.setState({state: 'INFO'});
    }

    render() {
        let content = null;

        switch (this.state.state) {
            case 'NOT_AUTH':
                content = <AuthCard auth={this.auth} />
                break;
            case 'AUTH':
                content = <ModCard chooseSettling={this.chooseSettling} chooseInfo={this.chooseInfo} />
                break;
            case 'SETTLING':
                content = <RoomFinder />
                break;
            case 'INFO':
                content = <RoomInfoFinder />
                break;
            default:
                content = <h1>Error!!!</h1>
        }

        let menu = null;
        if (this.state.state !== 'NOT_AUTH') {
            menu = (
                <nav>
                    <div className="nav-wrapper">
                        <a href="" className="brand-logo right">Общежитие ДВФУ</a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a onClick={this.chooseSettling}>Заселение</a></li>
                            <li><a onClick={this.chooseInfo}>Информация о комнате</a></li>
                        </ul>
                    </div>
                </nav>
            );
        }

        return(
            <div>
                {menu}
                {content}
            </div>
        );
    }
}

export default App;
