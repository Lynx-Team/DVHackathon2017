import React, { Component } from 'react';

import AuthCard from './AuthCard';
import RoomFinder from './RoomFinder'

class App extends Component {
    render() {
        return (
            <div>
                <AuthCard />
                <RoomFinder />
            </div>
        );
    }
}

export default App;