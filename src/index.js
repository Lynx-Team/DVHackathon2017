import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCpJWn3NVuV_sijmT8oCGyDR0vTPYhpRRQ",
    authDomain: "dvhackathon2017.firebaseapp.com",
    databaseURL: "https://dvhackathon2017.firebaseio.com",
    projectId: "dvhackathon2017",
    storageBucket: "dvhackathon2017.appspot.com",
    messagingSenderId: "1061453765204"
};

firebase.initializeApp(config);
window.db = firebase.database();
injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider><App /></MuiThemeProvider>,
    document.getElementById('root')
);
