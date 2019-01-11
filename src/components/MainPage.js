import React from 'react';
import { Link } from 'react-router-dom';
import Bookcase from './Bookcase';

const MainPage = ({categorizedBooks, removeBook, changeCategory}) => {
  return (
    <React.Fragment>
      <header id="main-header" role="banner">
        <h1>Book Shelves</h1>
      </header> {/* header */}

      <main role="main">
        <Bookcase 
          categorizedBooks={categorizedBooks}
          removeBook={removeBook}
          changeCategory={changeCategory} 
        />
        <Link 
          id="add-link"
          to="/add"
        >
          Add
        </Link>
      </main> {/* Main */}
    </React.Fragment>
  );
};

export default MainPage;