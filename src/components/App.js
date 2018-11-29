import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';
import AddBook from './AddBook';

class App extends Component {
  render() {
    return (
      <div id="App">
      <Route exact path="/" component={Main} />
      <Route path="/add" component={AddBook} />
      </div>
    );
  }
}

export default App;
