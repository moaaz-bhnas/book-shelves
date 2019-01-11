import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    titleSearchDisabled: false,
    authorSearchDisabled: false
  }

  handleTitleQueryChange = query => {
    // Update input value
    this.setState({
      authorSearchDisabled: query ? true : false
    });
    // Fetch books
    const formattedQuery = query.split(' ').join('+').toLowerCase(); // e.g. Harry Potter => harry+potter
    this.props.updateSearchBooks(formattedQuery, 'intitle');
  }

  handleAuthorQueryChange = query => {
    // Update input value
    this.setState({
      titleSearchDisabled: query ? true : false
    });
    // Fetch books
    const formattedQuery = query.split(' ').join('+').toLowerCase();
    this.props.updateSearchBooks(formattedQuery, 'inauthor');
  }

  render() {
    const {handleTitleQueryChange, handleAuthorQueryChange} = this;
    const {titleSearchDisabled, authorSearchDisabled} = this.state;

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
              onChange={event => handleTitleQueryChange(event.target.value)}
              disabled={titleSearchDisabled}
            />
          </p>

          <p>
            <label htmlFor="author-search">Book author: </label>
            <input 
              type="search" 
              id="author-search"
              onChange={event => handleAuthorQueryChange(event.target.value)}
              disabled={authorSearchDisabled}
            />
          </p>
        </fieldset>
      </form>                               
    );
  }
}

export default SearchForm;