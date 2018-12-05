import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import AddingPage from './AddingPage';
import 'whatwg-fetch';
// Images
import hp1 from '../images/hp1.jpg';
import hp2 from '../images/hp2.jpg';
import hp3 from '../images/hp3.jpg';
import hp4 from '../images/hp4.jpg';
import hp5 from '../images/hp5.jpg';
import hp6 from '../images/hp6.png';
import hp7 from '../images/hp7.jpg';

/* Object.assign polyfill --- */
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

/* Array.prototype.slice() polyfill --- */
(function () {
  'use strict';
  var _slice = Array.prototype.slice;

  try {
    // Can't be used with DOM elements in IE < 9
    _slice.call(document.documentElement);
  } catch (e) { // Fails in IE < 9
    // This will work for genuine arrays, array-like objects, 
    // NamedNodeMap (attributes, entities, notations),
    // NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
    // and will not fail on other DOM objects (as do DOM elements in IE < 9)
    Array.prototype.slice = function(begin, end) {
      // IE < 9 gets unhappy with an undefined end argument
      end = (typeof end !== 'undefined') ? end : this.length;

      // For native Array objects, we use the native slice function
      if (Object.prototype.toString.call(this) === '[object Array]'){
        return _slice.call(this, begin, end); 
      }

      // For array like object we handle it ourselves.
      var i, cloned = [],
        size, len = this.length;

      // Handle negative value for "begin"
      var start = begin || 0;
      start = (start >= 0) ? start : Math.max(0, len + start);

      // Handle negative value for "end"
      var upTo = (typeof end == 'number') ? Math.min(end, len) : len;
      if (end < 0) {
        upTo = len + end;
      }

      // Actual expected size of the slice
      size = upTo - start;

      if (size > 0) {
        cloned = new Array(size);
        if (this.charAt) {
          for (i = 0; i < size; i++) {
            cloned[i] = this.charAt(start + i);
          }
        } else {
          for (i = 0; i < size; i++) {
            cloned[i] = this[start + i];
          }
        }
      }

      return cloned;
    };
  }
}());

/* Array.prototype.forEach() polyfill --- */
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback/*, thisArg*/) {

    var T, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception. 
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined.
  };
}

/* Array.prototype.filter() polyfill --- */
if (!Array.prototype.filter){
  Array.prototype.filter = function(func, thisArg) {
    'use strict';
    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) )
        throw new TypeError();
   
    var len = this.length >>> 0,
        res = new Array(len), // preallocate array
        t = this, c = 0, i = -1;
    if (thisArg === undefined){
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func(t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
    else{
      while (++i !== len){
        // checks to see if the key was set
        if (i in this){
          if (func.call(thisArg, t[i], i, t)){
            res[c++] = t[i];
          }
        }
      }
    }
   
    res.length = c; // shrink down array to proper size
    return res;
  };
}

/* Array.prototype.filter() polyfill --- */
if (!Array.prototype.map) {

  Array.prototype.map = function(callback/*, thisArg*/) {

    var T, A, k;

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| 
    //    value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal 
    //    method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let A be a new array created as if by the expression new Array(len) 
    //    where Array is the standard built-in constructor with that name and 
    //    len is the value of len.
    A = new Array(len);

    // 7. Let k be 0
    k = 0;

    // 8. Repeat, while k < len
    while (k < len) {

      var kValue, mappedValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal 
      //    method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal 
        //    method of O with argument Pk.
        kValue = O[k];

        // ii. Let mappedValue be the result of calling the Call internal 
        //     method of callback with T as the this value and argument 
        //     list containing kValue, k, and O.
        mappedValue = callback.call(T, kValue, k, O);

        // iii. Call the DefineOwnProperty internal method of A with arguments
        // Pk, Property Descriptor
        // { Value: mappedValue,
        //   Writable: true,
        //   Enumerable: true,
        //   Configurable: true },
        // and false.

        // In browsers that support Object.defineProperty, use the following:
        // Object.defineProperty(A, k, {
        //   value: mappedValue,
        //   writable: true,
        //   enumerable: true,
        //   configurable: true
        // });

        // For best browser support, use the following:
        A[k] = mappedValue;
      }
      // d. Increase k by 1.
      k++;
    }

    // 9. return A
    return A;
  };
}

/* Book Model Class --- */
class BookModel {
  constructor({title, category, id, cover, previewLink}) { 
    this.title = title;
    this.category = category;
    this.id = id;
    this.cover = cover;
    this.previewLink = previewLink;
  }
}

class App extends Component {
  state = {
    categorizedBooks: [
      new BookModel({title: 'Harry Potter and the Philosopher\'s Stone', category:'currently reading',  id: 'wrOQLV6xB-wC', cover: hp1, previewLink: 'http://books.google.com.eg/books?id=39iYWTb6n6cC&dq=intitle:harry+potter+and+the&hl=&cd=8&source=gbs_api'}),
      new BookModel({title: 'Harry Potter and the Chamber of Secrets', category:'currently reading',  id: '0sPVBQAAQBAJ', cover: hp2, previewLink: 'http://books.google.com.eg/books?id=hkK0GgAACAAJ&dq=intitle:harry+potter+and+the+chamber&hl=&cd=5&source=gbs_api'}),
      new BookModel({title: 'Harry Potter and the Prisoner of Azkaban', category:'want to read',  id: 'rx6lswEACAAJ', cover: hp3, previewLink: 'http://books.google.com.eg/books?id=rx6lswEACAAJ&dq=intitle:harry+potter+and+the+pris&hl=&cd=1&source=gbs_api'}),
      new BookModel({title: 'Harry Potter and the Goblet of Fire', category:'want to read',  id: 'KKFTfEQ8bRAC', cover: hp4, previewLink: 'http://books.google.com.eg/books?id=KKFTfEQ8bRAC&dq=intitle:harry+potter+and+the+goble&hl=&cd=1&source=gbs_api'}),
      new BookModel({title: 'Harry Potter and the Order of the Phoenix', category:'read',  id: 'JJjgBwAAQBAJ', cover: hp5, previewLink: 'https://books.google.com/books/about/Harry_Potter_and_the_Order_of_the_Phoeni.html?hl=&id=JJjgBwAAQBAJ'}),
      new BookModel({title: 'Harry Potter and the Half-Blood Prince', category:'read',  id: 'J-EUBQAAQBAJ', cover: hp6, previewLink: 'http://books.google.com.eg/books?id=8Sr_uQEACAAJ&dq=intitle:harry+potter+and+the+half&hl=&cd=3&source=gbs_api'}),
      new BookModel({title: 'Harry Potter and the Deathly Hallows', category:'read', id: '7pvVBQAAQBAJ', cover: hp7, previewLink: 'http://books.google.com.eg/books?id=m-IoCQAAQBAJ&pg=PP1&dq=intitle:harry+potter+and+the+death&hl=&cd=9&source=gbs_api'})
    ],
    searchResultingBooks: [],
    titleQuery: '',
    authorQuery: '',
    titleSearchDisabled: false,
    authorSearchDisabled: false
  }

  addToBookcase(book, category) {
    /* To add the book to the categorizedBooks --- */
    const categorizedBooksCopy = this.state.categorizedBooks.slice();
    const bookCopy = Object.assign({}, book);
    bookCopy.category = category; // Now it's a categorized book :D
    categorizedBooksCopy.push(bookCopy);
    /* To appear categorized in search results --- */
    const searchResultingBooksCopy = this.state.searchResultingBooks.slice();
    searchResultingBooksCopy.forEach(bookCopy => {
      if (bookCopy.id === book.id) {
        bookCopy.category = category; // Now it's a categorized book :D
      }
    })
    this.setState({
      categorizedBooks: categorizedBooksCopy,
      searchResultingBooks: searchResultingBooksCopy
    });
  }

  removeBook(bookId) {
    const searchResultingBooksCopy = this.state.searchResultingBooks.slice();
    searchResultingBooksCopy.forEach(book => {
      if (book.id === bookId) {
        book.category = '';
      }
    })
    this.setState(prev => ({
      categorizedBooks: prev.categorizedBooks.filter(book => book.id !== bookId),
      searchResultingBooks: searchResultingBooksCopy
    }));
  }
  
  changeCategory(bookId, newCategory) {
    const categorizedBooksCopy = this.state.categorizedBooks.slice();
    const bookToMove = categorizedBooksCopy.filter(book => book.id === bookId)[0];
    bookToMove.category = newCategory;
    this.setState({
      categorizedBooks: categorizedBooksCopy
    })
  }

  updateSearchBooks(query, field) {
    const categorizedBooks = this.state.categorizedBooks;
    window.fetch(`https://www.googleapis.com/books/v1/volumes?q=${field}:${query}&maxResults=20&country=EG&key=AIzaSyCsJSEMz4agUsQkaJ5W8CZ6prwR0_WPLgY`)
      .then(response => response.json())
      .then(data => {
        const searchResultingBooks = (function getResultBooks() {
          const items = (data.items) ? data.items : []; // If the query is wierd and there're no matching books
          return (query === '') ? [] // When the search input is emptied
          : items.map(item => {
            const {title, previewLink} = item.volumeInfo;
            const cover = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : null;
            const id = item.id;
            return new BookModel({title: title, id: id, cover: cover, previewLink: previewLink});
          }).filter(book => book.cover); // Only books with covers
        })();
        (function searchForPreviouslyAddedBooks() {
          searchResultingBooks.forEach(resultBook => {
            categorizedBooks.forEach(categorizedBook => {
              if (resultBook.id === categorizedBook.id) {
                resultBook.category = categorizedBook.category; // To appear categorized in the search results
              }
            })
          })
        })();
        this.setState({
          searchResultingBooks
        })
      })
  }

  handleTitleQueryChange(query) {
    // Update input value
    this.setState({
      titleQuery: query,
      authorSearchDisabled: query ? true : false
    });
    // Fetch books
    const formattedQuery = query.split(' ').join('+').toLowerCase(); // e.g. Harry Potter => harry+potter
    this.updateSearchBooks(formattedQuery, 'intitle');
  }

  handleAuthorQueryChange(query) {
    // Update input value
    this.setState({
      authorQuery: query,
      titleSearchDisabled: query ? true : false
    });
    // Fetch books
    const formattedQuery = query.split(' ').join('+').toLowerCase();
    this.updateSearchBooks(formattedQuery, 'inauthor');
  }

  render() {
    const categorizedBooks = this.state.categorizedBooks;
    const searchResultingBooks = this.state.searchResultingBooks;

    return (
      <div id="App">
        <Route exact path="/" render={() => (
          <MainPage 
            categorizedBooks={categorizedBooks} 
            removeBook={(bookId) => this.removeBook(bookId)}
            changeCategory={(bookId, newCategory) => this.changeCategory(bookId, newCategory)}
          />
        )} />
        <Route path="/add" render={() => (
          <AddingPage 
            categorizedBooks={categorizedBooks}
            searchResultingBooks={searchResultingBooks}
            titleQuery={this.state.titleQuery}
            authorQuery={this.state.authorQuery}
            titleSearchDisabled={this.state.titleSearchDisabled}
            authorSearchDisabled={this.state.authorSearchDisabled}
            onTitleQueryChange={(query) => this.handleTitleQueryChange(query)}
            onAuthorQueryChange={(query) => this.handleAuthorQueryChange(query)}
            addToBookcase={(bookId, category) => this.addToBookcase(bookId, category)}
            removeBook={(bookId) => this.removeBook(bookId)}
            changeCategory={(bookId, newCategory) => this.changeCategory(bookId, newCategory)}
          />
        )} />
      </div>
    );
  }
}

export default App;