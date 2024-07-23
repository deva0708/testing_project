import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const BookList = ({ books }) => {
  return (
    <Row>
      {books.map((book) => (
        <Col key={book.id} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{book.name}</Card.Title>
              <Card.Text>Pages: {book.pages}</Card.Text>
              <Card.Text>Price: ${book.price}</Card.Text>
              <Card.Text>Type: {book.type}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BookList;