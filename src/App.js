import React, { Component } from 'react';
import Markdown from './markdown';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Markdown Previewer</h1>
        </div>
        <Markdown />
        <small><a className="small-link" href="https://github.com/ethanchoi812/react-markdown-previewer">Link to GitHub repo</a></small>
      </div>
    );
  }
}

export default App;
