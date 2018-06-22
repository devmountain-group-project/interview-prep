import React, { Component } from 'react'
import './App.css';
import Routes from './routes.js'
import Header from './components/Header';


class App extends Component {
  render() {
    return (
          <div>
            {Routes}
          </div>
    );
  }
}

export default App;
