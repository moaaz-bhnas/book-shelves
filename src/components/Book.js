import React, { Component } from 'react';
import { isPropertySupported } from './App';

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
    if (isPropertySupported('perspective')) {
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
        <a href={previewLink} target="_blank" rel="noopener noreferrer" className="preview-link">
          {bookEl}
        </a>
    
        <div className="options">
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
          >
            <option>{action} to--</option> {/* move to || add to*/}
            {categoriesOptions.map(category => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>
      </li>
    );
  }
}

export default Book;