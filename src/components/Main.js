import React from 'react';
import { Link, Route } from 'react-router-dom';
import Bookcase from './Bookcase';

const Main = () => {
  return (
    <main role="main">
      <Route exact path="/" render={() => (
        <React.Fragment>
          <Bookcase />
          <Link id="nav-link" to="/add">
            <abbr title="Add">+</abbr>
          </Link>
        </React.Fragment>
      )} />
      <Route path="/add" render={() => (
        <h1>Hi</h1>
      )} />
    </main>
  );
};

export default Main;