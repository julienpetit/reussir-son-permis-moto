import React, { Component, Fragment } from 'react';
import Landing from './pages/Landing/index';
import Navbar from './layout/Navbar/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Landing />
      </Fragment>
    );
  }
}

export default App;
