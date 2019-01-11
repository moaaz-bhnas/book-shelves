import React from 'react';
import Book from './Book';

const Category = ({categoryBooks, removeBook, changeCategory, id, title}) => {
    const booksElements = categoryBooks.map(({title, category, id, cover, previewLink}) => (
      <Book
        key={id}
        title={title}
        category={category}
        cover={cover}
        previewLink={previewLink}
        removeBook={() => removeBook(id)}
        changeCategory={newCategoryName => changeCategory(id, newCategoryName)}
      />
    ));

    return (
      <section 
        id={id}
        className="category"
        role="region" 
        aria-labelledby={id + '-heading'}
      >
        <h2 id={id + '-heading'}>
          {title}
        </h2>

        <ul>
          {booksElements}
        </ul>
      </section>
    );
}

export default Category;