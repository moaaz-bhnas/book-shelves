import React from 'react';
import Book from './Book';

const Category = props => {
    const booksElements = props.categoryBooks.map(book => {
      const {title, category, id, src} = book;
      return <Book
        key={id}
        title={title}
        category={category}
        src={src}
        removeBook={() => props.removeBook(book.id)}
        changeCategory={newCategoryName => props.changeCategory(book.id, newCategoryName)}
      />
    });

    return (
      <section 
        id={props.id}
        role="region" 
        aria-labelledby={props.id + '-heading'}
      >
        <h2 id={props.id + '-heading'}>{props.title}</h2>
        <ul>
          {booksElements}
        </ul>
      </section>
    );
}

export default Category;