import React from 'react';

const Book = props => {
  return (
    <li>
      <img src={props.src} alt={props.name}/>
    </li>
  );
}

export default Book;