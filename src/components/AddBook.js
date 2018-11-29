import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';

const AddBook = () => {
  return (
    <React.Fragment>
      <Link 
        className="nav-link"
        to="/"
      >
        <span role="img" aria-label="Left Arrow">←</span> Return to my bookcase
      </Link>

      <SearchForm />
    </React.Fragment>
  );
}

export default AddBook;