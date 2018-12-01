import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import AddingPage from './AddingPage';
// Images
import hp1 from '../images/hp1.jpg';
import hp2 from '../images/hp2.jpg';
import hp3 from '../images/hp3.jpg';
import hp4 from '../images/hp4.jpg';
import hp5 from '../images/hp5.jpg';
import hp6 from '../images/hp6.png';
import hp7 from '../images/hp7.jpg';

/* Book Model Class --- */
class BookModel {
  constructor({title, category, id, src}) { 
    this.title = title;
    this.src = src;
    this.id = id;
    this.category = category;
  }
}

class App extends Component {
  state = {
    categorizedBooks: [
      new BookModel({title: 'Harry Potter and the Philosopher\'s Stone', category:'currently reading',  id: 'wrOQLV6xB-wC', src: hp1}),
      new BookModel({title: 'Harry Potter and the Chamber of Secrets', category:'currently reading',  id: '0sPVBQAAQBAJ', src: hp2}),
      new BookModel({title: 'Harry Potter and the Prisoner of Azkaban', category:'want to read',  id: 'rx6lswEACAAJ', src: hp3}),
      new BookModel({title: 'Harry Potter and the Goblet of Fire', category:'want to read',  id: 'KKFTfEQ8bRAC', src: hp4}),
      new BookModel({title: 'Harry Potter and the Order of the Phoenix', category:'read',  id: 'JJjgBwAAQBAJ', src: hp5}),
      new BookModel({title: 'Harry Potter and the Half-Blood Prince', category:'read',  id: 'J-EUBQAAQBAJ', src: hp6}),
      new BookModel({title: 'Harry Potter and the Deathly Hallows', category:'read', id: '7pvVBQAAQBAJ', src: hp7})
    ],
    searchResultingBooks: [],
    titleQuery: '',
    authorQuery: '',
    titleSearchDisabled: false,
    authorSearchDisabled: false
  }

  addToBookcase(book, category) {
    /* To add the book to the categorizedBooks --- */
    const categorizedBooksCopy = this.state.categorizedBooks.slice();
    const bookCopy = Object.assign({}, book);
    bookCopy.category = category; // Now it's a categorized book :D
    categorizedBooksCopy.push(bookCopy);
    /* To appear categorized in search results --- */
    const searchResultingBooksCopy = this.state.searchResultingBooks.slice();
    searchResultingBooksCopy.forEach(bookCopy => {
      if (bookCopy.id === book.id) {
        bookCopy.category = category; // Now it's a categorized book :D
      }
    })
    this.setState({
      categorizedBooks: categorizedBooksCopy,
      searchResultingBooks: searchResultingBooksCopy
    });
  }

  removeBook(bookId) {
    const searchResultingBooksCopy = this.state.searchResultingBooks.slice();
    searchResultingBooksCopy.forEach(book => {
      if (book.id === bookId) {
        book.category = '';
      }
    })
    this.setState(prev => ({
      categorizedBooks: prev.categorizedBooks.filter(book => book.id !== bookId),
      searchResultingBooks: searchResultingBooksCopy
    }));
  }
  
  changeCategory(bookId, newCategory) {
    const categorizedBooksCopy = this.state.categorizedBooks.slice();
    const bookToMove = categorizedBooksCopy.filter(book => book.id === bookId)[0];
    bookToMove.category = newCategory;
    this.setState({
      categorizedBooks: categorizedBooksCopy
    })
  }

  updateSearchBooks(query, field) {
    const categorizedBooks = this.state.categorizedBooks;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${field}:${query}&maxResults=20&country=EG&key=AIzaSyCsJSEMz4agUsQkaJ5W8CZ6prwR0_WPLgY`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        const searchResultingBooks = (function getResultBooks() {
          const items = (data.items) ? data.items : []; // If the query is wierd and there're no matching books
          return (query === '') ? [] // When the search input is emptied
          : items.map(item => {
            const title = item.volumeInfo.title;
            const src = (item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail 
                                                     : null; // If no cover image in the api
            const id = item.id;
            return new BookModel({title: title, id: id, src: src});
          }).filter(book => book.src); // Only books with covers
        })();
        (function searchForPreviouslyAddedBooks() {
          searchResultingBooks.forEach(resultBook => {
            categorizedBooks.forEach(categorizedBook => {
              if (resultBook.id === categorizedBook.id) {
                resultBook.category = categorizedBook.category; // To appear categorized in the search results
              }
            })
          })
        })();
        this.setState({
          searchResultingBooks
        })
      })
  }

  handleTitleQueryChange(query) {
    // Update input value
    this.setState({
      titleQuery: query,
      authorSearchDisabled: query ? true : false
    });
    // Fetch books
    const formattedQuery = query.split(' ').join('+').toLowerCase(); // e.g. Harry Potter => harry+potter
    this.updateSearchBooks(formattedQuery, 'intitle');
  }

  handleAuthorQueryChange(query) {
    // Update input value
    this.setState({
      authorQuery: query,
      titleSearchDisabled: query ? true : false
    });
    // Fetch books
    const formattedQuery = query.split(' ').join('+').toLowerCase();
    this.updateSearchBooks(formattedQuery, 'inauthor');
  }

  render() {
    const categorizedBooks = this.state.categorizedBooks;
    const searchResultingBooks = this.state.searchResultingBooks;

    return (
      <div id="App">
        <Route exact path="/" render={() => (
          <MainPage 
            categorizedBooks={categorizedBooks} 
            removeBook={(bookId) => this.removeBook(bookId)}
            changeCategory={(bookId, newCategory) => this.changeCategory(bookId, newCategory)}
          />
        )} />
        <Route path="/add" render={() => (
          <AddingPage 
            categorizedBooks={categorizedBooks}
            searchResultingBooks={searchResultingBooks}
            titleQuery={this.state.titleQuery}
            authorQuery={this.state.authorQuery}
            titleSearchDisabled={this.state.titleSearchDisabled}
            authorSearchDisabled={this.state.authorSearchDisabled}
            onTitleQueryChange={(query) => this.handleTitleQueryChange(query)}
            onAuthorQueryChange={(query) => this.handleAuthorQueryChange(query)}
            addToBookcase={(bookId, category) => this.addToBookcase(bookId, category)}
            removeBook={(bookId) => this.removeBook(bookId)}
            changeCategory={(bookId, newCategory) => this.changeCategory(bookId, newCategory)}
          />
        )} />
      </div>
    );
  }
}

export default App;
