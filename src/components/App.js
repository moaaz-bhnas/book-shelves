import React, { Component } from 'react';
import Header from './Header';
import Bookcase from './Bookcase';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Header />
        <Bookcase />
      </div>
    );
  }
}

export default App;
