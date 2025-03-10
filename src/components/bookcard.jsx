// write the book component code here
import React from "react";
const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} className="book-image" />
      <h2>{book.name}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
    </div>
  );
};

export default BookCard;