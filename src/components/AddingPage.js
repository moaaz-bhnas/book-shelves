import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const AddingPage = ({searchResultingBooks, addToBookcase, removeBook, changeCategory, updateSearchBooks}) => {
  return (
    <React.Fragment>
      <header id="adding-page-header" role="banner">
        <Link 
          id="return-link"
          to="/"
        >
          <span role="img" aria-label="Left Arrow">←</span> Return to my bookcase
        </Link>
        <h1>
          Add to your Bookcase <span role="img" aria-label="Book">📕</span>
        </h1>
      </header>

      <SearchForm 
        updateSearchBooks={updateSearchBooks}
      />

      <SearchResults 
        searchResultingBooks={searchResultingBooks}
        addToBookcase={addToBookcase}
        removeBook={removeBook}
        changeCategory={changeCategory}
      />

      <footer>
        <p>
          <small>
            Powered by <b>Google books API</b>.
          </small>
        </p>
      </footer>
    </React.Fragment>
  );
}

export default AddingPage;