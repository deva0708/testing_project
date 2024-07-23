import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
 
const FetchBooks = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/books');
        const data = await response.json();
        data && setBooks(data);
      } catch (error) {
        setError(error);
      }
    };
 
    fetchBooks();
  }, []);
 
  return (
    <Container fluid style={{ padding: '20px' }}>
      <h1 className="mb-4 text-center">Book List</h1>
      <Row className="justify-content-center">
        {books.map(book => (
          <Col md="4" className="mb-4" key={book.id}>
            <Card style={{ height: '100%' }}>
              <Card.Img
                variant="top"
                src={book.cover_image}
                alt={book.title}
                style={{ height: '200px', width: '200px', objectFit: 'cover', margin: '0 auto' }}
                className="d-block mx-auto"
              />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <p>Author: {book.author}</p>
                  <p>Genre: {book.genre}</p>
                  <p>Published: {book.publication_year}</p>
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
 
export default FetchBooks;