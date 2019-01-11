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
  constructor({title, category, id, cover, previewLink}) { 
    Object.assign(this, {title, category, id, cover, previewLink})
  }
}

class App extends Component {
  state = {
    categorizedBooks: [
      new BookModel({title: 'Harry Potter and the Philosopher\'s Stone', category:'currently reading', id: 'wrOQLV6xB-wC', cover: hp1, previewLink: 'http://books.google.com.eg/books?id=39iYWTb6n6cC&dq=intitle:harry+potter+and+the&hl=&cd=8&source=gbs_api'}),
      new BookModel({title: 'Harry Potter and the Chamber of Secrets', category:'currently reading', id: '0sPVBQAAQBAJ', cover: hp2, previewLink: 'http://books.google.com.eg/books?id=hkK0GgAACAAJ&dq=intitle:harry+potter+and+the+chamber&hl=&cd=5&source=gbs_api'}),
      new BookModel({title: 'Harry Potter and the Prisoner of Azkaban', category:'want to read', id: 'rx6lswEACAAJ', cover: hp3, previewLink: 'http://books.google.com.eg/books?id=rx6lswEACAAJ&dq=intitle:harry+potter+and+the+pris&hl=&cd=1&source=gbs_api'}),
      new BookModel({title: 'Harry Potter and the Goblet of Fire', category:'want to read', id: 'KKFTfEQ8bRAC', cover: hp4, previewLink: 'http://books.google.com.eg/books?id=KKFTfEQ8bRAC&dq=intitle:harry+potter+and+the+goble&hl=&cd=1&source=gbs_api'}),
      new BookModel({title: 'Harry Potter and the Order of the Phoenix', category:'read', id: 'JJjgBwAAQBAJ', cover: hp5, previewLink: 'https://books.google.com/books/about/Harry_Potter_and_the_Order_of_the_Phoeni.html?hl=&id=JJjgBwAAQBAJ'}),
      new BookModel({title: 'Harry Potter and the Half-Blood Prince', category:'read', id: 'J-EUBQAAQBAJ', cover: hp6, previewLink: 'http://books.google.com.eg/books?id=8Sr_uQEACAAJ&dq=intitle:harry+potter+and+the+half&hl=&cd=3&source=gbs_api'}),
      new BookModel({title: 'Harry Potter and the Deathly Hallows', category:'read', id: '7pvVBQAAQBAJ', cover: hp7, previewLink: 'http://books.google.com.eg/books?id=m-IoCQAAQBAJ&pg=PP1&dq=intitle:harry+potter+and+the+death&hl=&cd=9&source=gbs_api'})
    ],
    searchResultingBooks: []
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

  updateSearchBooks = (query, field) => {
    const {categorizedBooks} = this.state;
    window.fetch(`https://www.googleapis.com/books/v1/volumes?q=${field}:${query}&maxResults=20&country=EG&key=AIzaSyCsJSEMz4agUsQkaJ5W8CZ6prwR0_WPLgY`)
      .then(response => response.json())
      .then(data => {
        const searchResultingBooks = (function getResultBooks() {
          const items = (data.items) ? data.items : []; // If the query is wierd and there're no matching books
          return (query === '') ? [] // When the search input is emptied
          : items.map(item => {
            const {title, previewLink} = item.volumeInfo;
            const cover = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : null;
            const id = item.id;
            return new BookModel({title: title, id: id, cover: cover, previewLink: previewLink});
          }).filter(book => book.cover); // Only books with covers
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
            addToBookcase={(bookId, category) => this.addToBookcase(bookId, category)}
            removeBook={(bookId) => this.removeBook(bookId)}
            changeCategory={(bookId, newCategory) => this.changeCategory(bookId, newCategory)}
            updateSearchBooks={this.updateSearchBooks}
          />
        )} />
      </div>
    );
  }
}

export default App;