import React from 'react';
import './App.css';
import './bootstrap/bootstrap.scss'
import './breakpoints.scss'
import Homepage from "./components/Homepage";
import socketIOClient from "socket.io-client";

const endpoint = "http://localhost:3001";
export const socket = socketIOClient(endpoint);

export default class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Homepage/>
            </div>
        );

    }

}
