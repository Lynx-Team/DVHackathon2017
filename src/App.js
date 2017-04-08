import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

        return(
            <MuiThemeProvider>
                {content}
            </MuiThemeProvider>
        );
    }
}

export default App;
