import React, { Component } from 'react';
import Book from './Book';

class Category extends Component {
  render() {
    const theOtherCategories = ['currently reading', 'want to read', 'read'].filter(category => category !== this.props.title.toLowerCase());

    const books = this.props.books.map(book => (
      <Book
        key={book.name}
        name={book.name}
        src={book.src}
        removeBook={() => this.props.removeBook(book.name)}
        theOtherCategories={theOtherCategories}
        changeCategory={newCategoryName => this.props.changeCategory(newCategoryName, book.name)}
      />
    ));

    return (
      <section 
        id={this.props.id}
        role="region" 
        aria-labelledby={this.props.id + '-heading'}
      >
        <h2 id={this.props.id + '-heading'}>{this.props.title}</h2>
        <ul>
          {books}
        </ul>
      </section>
    );
  }
}

export default Category;