import React, { Component } from 'react';

class Bookcase extends Component {
  state = {
    books: [
      new BookModel('Harry Potter and the Philosopher\'s Stone', hp1, 'currently reading'),
      new BookModel('Harry Potter and the Chamber of Secrets', hp2, 'currently reading'),
      new BookModel('Harry Potter and the Prisoner of Azkaban', hp3, 'want to read'),
      new BookModel('Harry Potter and the Goblet of Fire', hp4, 'want to read'),
      new BookModel('Harry Potter and the Order of the Phoenix', hp5, 'read'),
      new BookModel('Harry Potter and the Half-Blood Prince', hp6, 'read'),
      new BookModel('Harry Potter and the Deathly Hallows', hp7, 'read')
    ]
  }

  removeBook(bookTitle) {
    this.setState(prev => ({
      books: prev.books.filter(book => book.title !== bookTitle)
    }));
  }

  changeCategory(bookTitle, newCategory) {
    const books = this.state.books.slice();
    const bookToMove = books.filter(book => book.title === bookTitle)[0];
    bookToMove.category = newCategory;
    this.setState({
      books
    })
  }

  render() {
    const books = this.state.books;
    const currentlyReadingBooks = books.filter(book => book.category === 'currently reading');
    const wantToReadBooks = books.filter(book => book.category === 'want to read');
    const readBooks = books.filter(book => book.category === 'read');

    return (
      <React.Fragment>
        <Category 
          books={currentlyReadingBooks} 
          removeBook={(bookTitle) => this.removeBook(bookTitle)}
          changeCategory={(bookTitle, newCategory) => this.changeCategory(bookTitle, newCategory)}
          // For the <section>'s id and title
          id={categories.currentlyReading.id} 
          title={categories.currentlyReading.title}
        />
        <Category 
          books={wantToReadBooks} 
          removeBook={(bookTitle) => this.removeBook(bookTitle)}
          changeCategory={(bookTitle, newCategory) => this.changeCategory(bookTitle, newCategory)}
          // For the <section>'s id and title
          id={categories.wantToRead.id} 
          title={categories.wantToRead.title}
        />
        <Category 
          books={readBooks} 
          removeBook={(bookTitle) => this.removeBook(bookTitle)}
          changeCategory={(bookTitle, newCategory) => this.changeCategory(bookTitle, newCategory)}
          // For the <section>'s id and title
          id={categories.read.id} 
          title={categories.read.title}
        />
      </React.Fragment>
    );
  }
}

export default Bookcase;