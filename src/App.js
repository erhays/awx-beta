import React, { Component } from 'react';
import logo from './awx.gif';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      deviceId: "",
      loggedIn: false,
      error: "",
      trackName: "",
      artistName: "",
      albumName: "",
      playing: false,
      position: 0,
      duration: 0,
    };
  }
  render() {
    const { token } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src="{logo}" className="App-logo" alt="logo" />
          <h1>AWX App</h1>
          <p>Ephemeral shared playlists made by magic. Find a nearby listener and start adding.</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
