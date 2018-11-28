import React, { Component } from 'react';
import Book from './Book';

class Category extends Component {
  render() {
    const books = this.props.books.map(book => (
      <Book
        key={book.name}
        name={book.name}
        src={book.src}
        removeBook={this.props.removeBook}
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