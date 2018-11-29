import React from 'react';
import { Link } from 'react-router-dom';
import Bookcase from './Bookcase';

const Main = () => {
  return (
    <React.Fragment>
      <header role="banner">
        <h1>Book Shelves</h1>
      </header>
      <main role="main">
        <Bookcase />
        <Link 
          className="nav-link" 
          to="/add"
        >
          <abbr title="Add">+</abbr>
        </Link>
      </main>
    </React.Fragment>
  );
};

export default Main;