import React from 'react';

const SearchForm = () => {
  return (
    <form id="search-form">
      <header>
        <h1>Add to your Bookcase  
          <span role="img" aria-label="Book">📕</span>
        </h1>
        <p>
          Search for a book by its <b>title</b> or <b>author name</b> to add to your bookcase.
        </p>
      </header>

      <fieldset>
        <legend>Search by</legend>

        <p>
          <label htmlFor="title-search">Book title: </label>
          <input 
            type="search" 
            id="title-search"
            value={props.titleQuery}
            onChange={props.onTitleQueryChange}
            disabled={props.titleSearchDisabled}
          />
        </p>

        <p>
          <label htmlFor="author-search">Book author: </label>
          <input 
            type="search" 
            id="author-search"
            value={props.authorQuery}
            onChange={props.onAuthorQueryChange}
            disabled={props.authorSearchDisabled}
          />
        </p>
      </fieldset>
    </form>
  );
}

export default SearchForm;