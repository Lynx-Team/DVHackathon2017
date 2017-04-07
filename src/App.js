import React, { Component } from 'react';

import AuthCard from './AuthCard';
import RoomFinder from './RoomFinder'
import ModCard from "./ModCard";

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {state: 'NOT_AUTH'};
    }

    auth() {
        this.setState({state: 'AUTH'});
    }

    render() {
        switch (this.state.state) {
            case 'NOT_AUTH':
                return (
                    <AuthCard auth={this.auth.bind(this)} />
                );
                break;
            case 'AUTH':
                return(
                    <ModCard />
                );
                break;
            default:
                return(
                    <h1>Error!!!</h1>
                );
        }
    }
}

export default App;
