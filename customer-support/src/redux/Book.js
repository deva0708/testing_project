import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { purchaseBook } from './actions';

const Book = () => {
  const dispatch = useDispatch();
  const purchasedBooks = useSelector(state => state.purchasedBooks);

  const handlePurchase = () => {
    const bookId = '123'; 
    const quantity = 1; 
    dispatch(purchaseBook(bookId, quantity));
  };

  return (
    <div>
      <h1>Book Store</h1>
      <button onClick={handlePurchase}>Purchase Book</button>
      <h2>Purchased Books:</h2>
      <ul>
        {purchasedBooks.map((book, index) => (
          <li key={index}>
            Book ID: {book.bookId}, Quantity: {book.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;