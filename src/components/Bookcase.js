import React, { Component } from 'react';
// Images
import hp1 from '../images/hp-1.jpeg';
import hp2 from '../images/hp-2.jpeg';
import hp3 from '../images/hp-3.jpeg';
import hp4 from '../images/hp-4.jpeg';
import hp5 from '../images/hp-5.jpeg';
import hp6 from '../images/hp-6.jpeg';
import hp7 from '../images/hp-7.jpeg';
// Categories
import Category from './Category';

/* Category Model Class --- */
class CategoryModel {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}
const categories = {
  currentlyReading: new CategoryModel('currently-reading', 'Currently Reading'),
  wantToRead: new CategoryModel('want-to-read', 'Want to Read'),
  read: new CategoryModel('read', 'Read')
}
/* e.g.
  {
    id: 'read', // To be used as a section id in Category component
    title: 'Read' // To be used as a section title
  }
*/

/* Book Model Class --- */
class BookModel {
  constructor(name, src, category) { 
    this.name = name;
    this.src = src;
    this.category = category;
  }
}

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

  removeBook(bookName) {
    this.setState(prev => ({
      books: prev.books.filter(book => book.name !== bookName)
    }));
  }

  changeCategory(bookName, newCategory) {
    const books = this.state.books.slice();
    const bookToMove = books.filter(book => book.name === bookName)[0];
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
      <main role="main">
        <Category 
          books={currentlyReadingBooks} 
          removeBook={(bookName) => this.removeBook(bookName)}
          changeCategory={(bookName, newCategory) => this.changeCategory(bookName, newCategory)}
          // For the <section>'s id and title
          id={categories.currentlyReading.id} 
          title={categories.currentlyReading.title}
        />
        <Category 
          books={wantToReadBooks} 
          removeBook={(bookName) => this.removeBook(bookName)}
          changeCategory={(bookName, newCategory) => this.changeCategory(bookName, newCategory)}
          // For the <section>'s id and title
          id={categories.wantToRead.id} 
          title={categories.wantToRead.title}
        />
        <Category 
          books={readBooks} 
          removeBook={(bookName) => this.removeBook(bookName)}
          changeCategory={(bookName, newCategory) => this.changeCategory(bookName, newCategory)}
          // For the <section>'s id and title
          id={categories.read.id} 
          title={categories.read.title}
        />
      </main>
    );
  }
}

export default Bookcase;