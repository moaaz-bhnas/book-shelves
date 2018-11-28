import React from 'react';

const Book = props => {
  return (
    <li>
      <button type="button" onClick={() => props.removeBook(props.name)}>
        <abbr title="Remove">x</abbr>
      </button>

      <img src={props.src} alt={props.name}/>

      <select id="category-selection" aria-label="Choose another category to move this book to">
        <option value="">--move to--</option>
        <option>currently reading</option>
        <option>want to read</option>
        <option>read</option>
      </select>
    </li>
  );
}

export default Book;