import React, { Component } from 'react';

import './css/App.scss';
import logo from './img/logo.svg';
import logo2 from './img/logo.png';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App!!!</h1>
        <img src={logo} alt={logo} className="logo" />
        <img src={logo2} alt={logo2} className="logo" />
      </div>
    );
  }
}

export default App;
