import React from 'react';
import Category from './Category';

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
        id={'currently-reading'} 
        title={'Currently Reading'}
      />
 
      <hr/>

      <Category 
        categoryBooks={wantToReadBooks} 
        removeBook={removeBook}
        changeCategory={changeCategory} 
        // For the <section>'s id and title
        id={'want-to-read'} 
        title={'Want to Read'}
      />

      <hr/>

      <Category 
        categoryBooks={readBooks} 
        removeBook={removeBook}
        changeCategory={changeCategory} 
        // For the <section>'s id and title
        id={'read'} 
        title={'Read'}
      />
    </React.Fragment>
  );
}

export default Bookcase;