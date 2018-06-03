import React, { Component } from 'react';
import './App.css';

// Components
import Countdown from './components/Countdown';

class App extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <Countdown />
      </div>
    );
  }
}

export default App;
