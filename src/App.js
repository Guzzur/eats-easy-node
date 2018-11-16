import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const network = require('./network/index');

const config = {
  api: {
    url: 'https://eats-easy-spring.herokuapp.com/api'
  }
};

class App extends Component {
  componentDidMount () {
    this.setState({ api: network(config).json() });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.api.appName}</p>
        </header>
      </div>
    );
  }
}

export default App;
