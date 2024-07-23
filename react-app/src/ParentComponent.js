import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Form } from 'react-bootstrap';
import BookList from './BookList';

const ParentComponent = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({
    comic: false,
    horror: false,
    divine: false,
  });
  const [sort, setSort] = useState('default');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/books');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: checked,
    }));
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      (filter.comic && book.type === 'comic') ||
      (filter.horror && book.type === 'horror') ||
      (filter.divine && book.type === 'divine') ||
      (!filter.comic && !filter.horror && !filter.divine);
    return matchesSearch && matchesFilter;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (sort === 'lowToHigh') {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <Container className="mt-4">
      <h1>Book List</h1>
      <Form className="mb-3">
        <Form.Group controlId="search">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Comic Books"
            name="comic"
            checked={filter.comic}
            onChange={handleFilterChange}
          />
          <Form.Check
            type="checkbox"
            label="Horror Books"
            name="horror"
            checked={filter.horror}
            onChange={handleFilterChange}
          />
          <Form.Check
            type="checkbox"
            label="Divine Books"
            name="divine"
            checked={filter.divine}
            onChange={handleFilterChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="radio"
            label="Default"
            name="sort"
            value="default"
            checked={sort === 'default'}
            onChange={handleSortChange}
          />
          <Form.Check
            type="radio"
            label="Price: Low to High"
            name="sort"
            value="lowToHigh"
            checked={sort === 'lowToHigh'}
            onChange={handleSortChange}
          />
        </Form.Group>
      </Form>
      <BookList books={sortedBooks} />
    </Container>
  );
};

export default ParentComponent;