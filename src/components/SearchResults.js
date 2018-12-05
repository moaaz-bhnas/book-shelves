import React from 'react';
import Book from './Book'

const SearchBooks = props => {
  const searchResultingBooks = props.searchResultingBooks.map(book => {
    const {title, category, id, cover, previewLink} = book;
    return <Book
        key={id}
        title={title}
        cover={cover}
        category={category}
        previewLink={previewLink}
        addToBookcase={category => props.addToBookcase(book, category)}
        removeBook={() => props.removeBook(book.id)}
        changeCategory={newCategoryName => props.changeCategory(book.id, newCategoryName)}
      />
  })

  return (
    <ul id="results">
      {searchResultingBooks}
    </ul>
  );
}

export default SearchBooks;