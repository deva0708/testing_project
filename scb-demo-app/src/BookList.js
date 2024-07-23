// import React from 'react';

// const BookList = ({ books }) => {
//   return (
//     <div>
//       {books.map((book) => (
//         <div key={book.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
//           <h3>{book.name}</h3>
//           <p>Pages: {book.pages}</p>
//           <p>Price: ${book.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BookList;


import React from 'react';

const BookList = ({ books }) => {
  return (
    <div className="row">
      {books.map((book) => (
        <div key={book.id} className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{book.name}</h5>
              <p className="card-text">Pages: {book.pages}</p>
              <p className="card-text">Price: ${book.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;