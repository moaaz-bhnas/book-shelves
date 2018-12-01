import React from 'react';
import { Link } from 'react-router-dom';
import Bookcase from './Bookcase';

const MainPage = props => {
  return (
    <React.Fragment>
      <header role="banner">
        <h1>Book Shelves</h1>
      </header>
      <main role="main">
        <Bookcase 
          categorizedBooks={props.categorizedBooks}
          removeBook={props.removeBook}
          changeCategory={props.changeCategory} 
        />
        <Link 
          className="nav-link" 
          to="/add"
        >
          <abbr title="Add" style={{
            fontSize: '3rem',
            position: 'fixed',
            top: 0,
            right: 0
          }}>+</abbr>
        </Link>
      </main>
    </React.Fragment>
  );
};

export default MainPage;