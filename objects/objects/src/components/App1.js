import React, { Component } from 'react';
import logo from '.100SQFTLOGOsmall.png';
import '.Header.css';

class App extends Component {
  render() {
    return (
      <div className="header">

        <header className="App-header">
            <div className="header">
        <a href="#default" className="logo">100 Sq. ft. Consulting</a>
            <div className="header-right">
              <a classNAme="active" href="#home">Home</a>
              <a href="#contact">Contact</a>
              <a href="#about">about</a>
        </div>
        </div>


          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            APP 
          </a>
        </header>
      </div>
    );
  }
}

export default App1;