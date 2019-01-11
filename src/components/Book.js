import React from 'react';
import display3d from '../css-support';

const Book = ({category, title, cover, previewLink, changeCategory, addToBookcase, removeBook}) => {
  /*
    - If the book is categorized, it will be rendered in a specific way.
    - Remove option is provided and instead of offering to add the book, the app offers to move it to the other cateories
  */
  const isCategorizedBook = !!category; // (!!) converts any datatype to boolean
  const action = isCategorizedBook ? 'move' : 'add';
  const categories = ['currently reading', 'want to read', 'read'];
  const categoriesOptions = isCategorizedBook ? categories.filter(item => item !== category) 
  : categories;
  const label = isCategorizedBook ? 'Choose another category to move this book to'
  : 'Choose a category to add this book to';
  const selectionHandler = isCategorizedBook ? changeCategory
  : addToBookcase;
  // 3d book || 2d book
  let bookEl;
  if (display3d) {
    bookEl = 
      <div className="three-d-book">
        <img className="front face" src={cover} alt={title}/>
        <div className="back face" role="presentation"></div>
        <div className="top face" role="presentation"></div>
        <div className="bottom face" role="presentation"></div>
        <div className="right face" role="presentation"></div>
        <div className="left face" role="presentation"></div>
      </div>
  } else {
    bookEl = <img className="cover" src={cover} alt={title}/>
  }
  return (
    <li className="book">
      <a href={previewLink} className="preview-link" title="Click for the book preview page">
        {bookEl}
      </a>
  
      {
        isCategorizedBook &&
        <button 
          className="remove"
          type="button" 
          onClick={removeBook}
        >
          <abbr title="Remove">⤫</abbr>
        </button>
      } {/* Remove Button */}

      <select 
        value={category}
        className="category-selection" 
        aria-label={label}
        onChange={event => selectionHandler(event.target.value)}
        style={{
          // To leave space for exactly "move" or "add"
          width: isCategorizedBook ? '4.0625rem' /*move*/ : '3.4375rem', /*add*/
        }}
      >
        <option>{action} to--</option> {/* move to || add to*/}
        {categoriesOptions.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </li>
  );
}

export default Book;