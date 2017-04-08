import React, { Component } from 'react';

import AuthCard from './AuthCard';
import ModCard from "./ModCard";
import RoomFinder from './RoomFinder';
import RoomInfoFinder from './RoomInfoFinder';
import NewsCard from './NewsCard'
import ProfileCard from "./ProfileCard";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {state: 'NOT_AUTH'};

        this.chooseSettling = this.chooseSettling.bind(this);
        this.chooseInfo = this.chooseInfo.bind(this);
        this.home = this.home.bind(this);
        this.profile = this.profile.bind(this);
    }

    home() {
        this.setState({state: 'HOME'});
    }

    profile() {
        this.setState({state: 'PROFILE'});
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
                content = <AuthCard auth={this.home} />
                break;
            case 'HOME':
                content = <NewsCard />
                break;
            case 'SETTLING':
                content = <RoomFinder />
                break;
            case 'INFO':
                content = <RoomInfoFinder />
                break;
            case 'PROFILE':
                content = <ProfileCard />
                break;
            default:
                content = <h1>Error!!!</h1>
        }

        let menu = null;
        if (this.state.state !== 'NOT_AUTH') {
            menu = (
            <div className="row">
                <nav className="col s12 m4 l10 offset-l1">
                    <div className="nav-wrapper">
                        <a href="" className="brand-logo right">Общежитие ДВФУ</a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a onClick={this.home}>Главная</a></li>
                            <li><a onClick={this.chooseInfo}>Информация о комнатах</a></li>
                            <li><a onClick={this.profile}>Профиль</a></li>
                            <li><a onClick={this.chooseSettling}>Заселение</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
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
