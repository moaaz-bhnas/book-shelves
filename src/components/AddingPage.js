import React from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const AddingPage = props => {
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
        titleQuery={props.titleQuery}
        authorQuery={props.authorQuery}
        titleSearchDisabled={props.titleSearchDisabled}
        authorSearchDisabled={props.authorSearchDisabled}
        onTitleQueryChange={props.onTitleQueryChange}
        onAuthorQueryChange={props.onAuthorQueryChange}
      />

      <SearchResults 
        searchResultingBooks={props.searchResultingBooks}
        addToBookcase={props.addToBookcase}
        removeBook={props.removeBook}
        changeCategory={props.changeCategory}
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