import React from 'react';

const ComicBook = ({ books, onBookClick }) => {
  return (
    <div>
      <h2>Comic Books</h2>
      <ul style={{listStyleType:'none'}}>
        {books.map(book => (
          <li key={book.BookID} onClick={() => onBookClick(book)}>
            <strong>{book.BookName}</strong><br />
            Pages: {book.Noofpages}<br />
            Price: ${book.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComicBook;