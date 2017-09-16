import React, { Component } from 'react';
import * as firebase from "firebase";
import Router from "../src/Navigation/Router";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDKkVg7c00GMLAQ1casU3Q2r_5sFAcumhg",
    authDomain: "server-storage-project.firebaseapp.com",
    databaseURL: "https://server-storage-project.firebaseio.com",
    projectId: "server-storage-project",
    storageBucket: "server-storage-project.appspot.com",
    messagingSenderId: "519850854750"
};
firebase.initializeApp(config);


class App extends Component {
    render() {
        return (
                <Router />
        )
    }
}
export default App