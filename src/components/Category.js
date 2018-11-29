import React, { Component } from 'react';
import Book from './Book';

const Category = props => {
    const theOtherCategories = ['currently reading', 'want to read', 'read'].filter(category => category !== props.title.toLowerCase());

    const books = props.books.map(book => (
      <Book
        key={book.title}
        title={book.title}
        src={book.src}
        category={book.category}
        removeBook={() => props.removeBook(book.title)}
        theOtherCategories={theOtherCategories}
        changeCategory={newCategoryName => props.changeCategory(book.title, newCategoryName)}
      />
    ));

    return (
      <section 
        id={props.id}
        role="region" 
        aria-labelledby={props.id + '-heading'}
      >
        <h2 id={props.id + '-heading'}>{props.title}</h2>
        <ul>
          {books}
        </ul>
      </section>
    );
}

export default Category;