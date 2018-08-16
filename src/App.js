import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';

class App extends Component {
  
  render() {
    const style = {
      cursor: 'pointer',
      fontSize: 20,
      ':hover': {
          fontSize: 25,
      }
    };

    return (
      <div className="App">
        <h1 style={style}>Hello World</h1>
      </div>
    );
  }
}

export default Radium(App);
