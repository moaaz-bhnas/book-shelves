import React from 'react';
import Book from './Book'

const SearchBooks = props => {
  const searchResultingBooks = props.searchResultingBooks.map(book => (
    <Book
        key={book.id}
        title={book.title}
        src={book.src}
        category={book.category}
        addToBookcase={category => props.addToBookcase(book, category)}
        removeBook={() => props.removeBook(book.id)}
        changeCategory={newCategoryName => props.changeCategory(book.id, newCategoryName)}
      />
  ))

  return (
    <ul id="results">
      {searchResultingBooks}
    </ul>
  );
}

export default SearchBooks;