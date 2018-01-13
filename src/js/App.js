import React, { Component } from 'react';
import lightning from '../img/lightning.svg';
import wink from '../img/wink.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={lightning} className="App-logo lightning" />
          <img src={wink} className="App-logo wink" />
          <h1 className="App-title">Welcome to you, looking at this page.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
