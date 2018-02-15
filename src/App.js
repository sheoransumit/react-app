import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//const n function outside class
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <h1>
          Hello, {formatName(user)}!
        </h1>

      </div>
    );
  }
}

export default App;