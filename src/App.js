import React, { Component } from 'react';
import './App.css';
import Rows from './Rows.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="inline" id="options">Options</h1>
          <br />
          <h1 className="inline" id="letters">A</h1>
          <h1 className="inline" id="letters">B</h1>
          <h1 className="inline" id="letters">C</h1>
          <h1 className="inline" id="letters">D</h1>
        </div>
        <div>
          <Rows />
        </div>
      </div>
    );
  }
}

export default App;
