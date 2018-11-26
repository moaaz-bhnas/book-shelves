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
  constructor(name, src) { 
    this.name = name;
    this.src = src;
  }
}

class Bookcase extends Component {
  state = {
    books: {
      currentlyReading: [
        new BookModel('Harry Potter and the Philosopher\'s Stone', hp1),
        new BookModel('Harry Potter and the Chamber of Secrets', hp2)
      ],
      wantToRead: [
        new BookModel('Harry Potter and the Prisoner of Azkaban', hp3),
        new BookModel('Harry Potter and the Goblet of Fire', hp4)
      ],
      read: [
        new BookModel('Harry Potter and the Order of the Phoenix', hp5),
        new BookModel('Harry Potter and the Half-Blood Prince', hp6),
        new BookModel('Harry Potter and the Deathly Hallows', hp7)
      ]
    }
   }

  render() {
    return (
      <main role="main">
        <Category 
          books={this.state.books.currentlyReading} 
          id={categories.currentlyReading.id} 
          title={categories.currentlyReading.title} 
        />
        <Category 
          books={this.state.books.wantToRead} 
          id={categories.wantToRead.id} 
          title={categories.wantToRead.title} 
        />
        <Category 
          books={this.state.books.read} 
          id={categories.read.id} 
          title={categories.read.title} 
        />
      </main>
    );
  }
}

export default Bookcase;