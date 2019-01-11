import React from 'react';
import Book from './Book'

const SearchBooks = ({searchResultingBooks, addToBookcase, removeBook, changeCategory}) => {
  const booksElements = searchResultingBooks.map(({title, category, id, cover, previewLink}) => (
    <Book
      key={id}
      title={title}
      cover={cover}
      category={category}
      previewLink={previewLink}
      addToBookcase={category => addToBookcase({title, category, id, cover, previewLink}, category)}
      removeBook={() => removeBook(id)}
      changeCategory={newCategoryName => changeCategory(id, newCategoryName)}
    />
  ))

  return (
    <ul id="results">
      {booksElements}
    </ul>
  );
}

export default SearchBooks;