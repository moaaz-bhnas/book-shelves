import React, { Component } from 'react';

/* Helper functions to detect 3d transforms support --- */
// Function from: https://stackoverflow.com/a/36191841/7982963
const isValueSupported = (prop, value) => {
  const el = document.createElement('div');
  el.style[prop] = value;
  return el.style[prop] === value;
}
// Function from: http://lea.verou.me/2009/02/check-if-a-css-property-is-supported/
const isPropertySupported = property =>  property in document.body.style;

class Book extends Component {
  state = {
    x: 6.53,
    y: 10,
    z: 2
  }

  render() {
    const currentBookCategory = this.props.category;
    const {title, cover, previewLink} = this.props;
    /*
    - If the book is categorized, it will be rendered in a specific way.
    - Remove option is provided and instead of offering to add the book, the app offers to move it to the other cateories
    */
    const isCategorizedBook = !!currentBookCategory;
    const action = isCategorizedBook ? 'move' : 'add';
    const categories = ['currently reading', 'want to read', 'read'];
    const categoriesOptions = isCategorizedBook ? categories.filter(category => category !== currentBookCategory)
                                                : categories;         
    const label = isCategorizedBook ? 'Choose another category to move this book to'
                                    : 'Choose a category to add this book to';        
    const selectionHandler = isCategorizedBook ? this.props.changeCategory 
                                              : this.props.addToBookcase;

    // 3d book || 2d book
    let bookEl;
    if (isValueSupported('perspective', '400px') && isValueSupported('transform-style', 'preserve-3d') && isValueSupported('transform', 'rotateY(-180deg)') && isPropertySupported('perspective') && isPropertySupported('transform-style') && isPropertySupported('transform')) {
      console.log(1);
      bookEl = 
        <div id="three-d-book">
          <img className="face" id="front" src={cover} alt={title}/>
          <div className="face" id="back" role="presentation"></div>
          <div className="face" id="top" role="presentation"></div>
          <div className="face" id="bottom" role="presentation"></div>
          <div className="face" id="right" role="presentation"></div>
          <div className="face" id="left" role="presentation"></div>
        </div>
    } else {
      bookEl = <img className="cover" src={cover} alt={title}/>
    }

    return (
      <li className="book">
        <a href={previewLink} target="_blank" rel="noopener noreferrer" className="preview-link" title="Click to open a preview on a new window">
          {bookEl}
        </a>
    
        {
          isCategorizedBook &&
          <button 
            className="remove"
            type="button" 
            onClick={this.props.removeBook}
          >
            <abbr title="Remove">⤫</abbr>
          </button>
        } {/* Remove Button */}

        <select 
          value={currentBookCategory}
          className="category-selection" 
          aria-label={label}
          onChange={event => selectionHandler(event.target.value)}
          style={{
            // To leave space for exactly "move" or "add"
            width: isCategorizedBook ? '4.0625rem' /*move*/ : '3.4375rem', /*add*/
            // To adjust the element exactly in the center
            left: isCategorizedBook ? '1.32875rem' /*move*/ : '1.64125rem' /*add*/
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
}

export default Book;