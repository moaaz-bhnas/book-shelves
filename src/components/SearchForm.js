import React from 'react';

const SearchForm = props => {
  return (
    <form id="search-form">
      <p>
        Search for a book by its <b>title</b> or <b>author name</b> to add to your bookcase.
      </p>

      <fieldset>
        <legend>Search by</legend>

        <p>
          <label htmlFor="title-search">Book title: </label>
          <input 
            type="search" 
            id="title-search"
            value={props.titleQuery}
            onChange={event => props.onTitleQueryChange(event.target.value)}
            disabled={props.titleSearchDisabled}
          />
        </p>

        <p>
          <label htmlFor="author-search">Book author: </label>
          <input 
            type="search" 
            id="author-search"
            value={props.authorQuery}
            onChange={event => props.onAuthorQueryChange(event.target.value)}
            disabled={props.authorSearchDisabled}
          />
        </p>
      </fieldset>
    </form>
  );
}

export default SearchForm;