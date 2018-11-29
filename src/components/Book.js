import React from 'react';

const Book = props => {
  return (
    <li>
      <button type="button" onClick={props.removeBook}>
        <abbr title="Remove">x</abbr>
      </button>

      <img src={props.src} alt={props.title}/>

      <select 
        value={props.category}
        id="category-selection" 
        aria-label="Choose another category to move this book to"
        onChange={event => props.changeCategory(event.target.value)}
      >
        <option value="">--move to--</option>
        {props.theOtherCategories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </li>
  );
}

export default Book;