import React from 'react';
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

const Bookcase = ({categorizedBooks, removeBook, changeCategory}) => {
  const currentlyReadingBooks = categorizedBooks.filter(book => book.category === 'currently reading');
  const wantToReadBooks = categorizedBooks.filter(book => book.category === 'want to read');
  const readBooks = categorizedBooks.filter(book => book.category === 'read');

  return (
    <React.Fragment>
      <Category 
        categoryBooks={currentlyReadingBooks} 
        removeBook={removeBook}
        changeCategory={changeCategory} 
        // For the <section>'s id and title
        id={categories.currentlyReading.id} 
        title={categories.currentlyReading.title}
      />
 
      <hr/>

      <Category 
        categoryBooks={wantToReadBooks} 
        removeBook={removeBook}
        changeCategory={changeCategory} 
        // For the <section>'s id and title
        id={categories.wantToRead.id} 
        title={categories.wantToRead.title}
      />

      <hr/>

      <Category 
        categoryBooks={readBooks} 
        removeBook={removeBook}
        changeCategory={changeCategory} 
        // For the <section>'s id and title
        id={categories.read.id} 
        title={categories.read.title}
      />
    </React.Fragment>
  );
}

export default Bookcase;