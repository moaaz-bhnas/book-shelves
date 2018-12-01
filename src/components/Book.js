import React from 'react';

const Book = props => {
  const currentBookTitle = props.title;
  const currentBookCategory = props.category;
  const currentBookSrc = props.src;
  /*
  - If the book is categorized, it will be rendered in a specific way.
  - Remove option is provided and instead of offering to add the book, the app offers to move it to the other cateories
  */
  const isCategorizedBook = !!currentBookCategory;
  const action = isCategorizedBook ? 'move to' : 'add to';
  const categories = ['currently reading', 'want to read', 'read'];
  const categoriesOptions = isCategorizedBook ? categories.filter(category => category !== currentBookCategory)
                                              : categories;                                     
  const label = isCategorizedBook ? 'Choose another category to move this book to'
                                  : 'Choose a category to add this book to';        
  const selectionHandler = isCategorizedBook ? props.changeCategory 
                                             : props.addToBookcase; 

  return (
    <li>
      {
        isCategorizedBook &&
        <button type="button" onClick={props.removeBook}>
          <abbr title="Remove">x</abbr>
        </button>
      }

      <img src={currentBookSrc} alt={currentBookTitle}/>

      <select 
        value={currentBookCategory}
        className="category-selection" 
        aria-label={label}
        onChange={event => selectionHandler(event.target.value)}
      >
        <option value="">--{action}--</option> {/* move to || add to*/}
        {categoriesOptions.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </li>
  );
}

export default Book;