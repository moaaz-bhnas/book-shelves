import React from 'react';
import Book from './Book';

const Category = props => {
    const booksElements = props.categoryBooks.map(book => {
      const {title, category, id, cover, previewLink} = book;
      return <Book
        key={id}
        title={title}
        category={category}
        cover={cover}
        previewLink={previewLink}
        removeBook={() => props.removeBook(book.id)}
        changeCategory={newCategoryName => props.changeCategory(book.id, newCategoryName)}
      />
    });

    const {id, title} = props;

    return (
      <section 
        id={id}
        className="category"
        role="region" 
        aria-labelledby={props.id + '-heading'}
      >
        <h2 id={props.id + '-heading'}>
          {title}
        </h2>

        <ul>
          {booksElements}
        </ul>
      </section>
    );
}

export default Category;