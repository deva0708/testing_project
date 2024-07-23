import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import axios from 'axios';

const ParentComponentOne = () => {
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
        const response = await axios.get('https://freetestapi.com/api/v1/books');
        setBooks(response.data);
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
    <div className="container">
      <h1 className="mt-4">Book List</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="comic"
            checked={filter.comic}
            onChange={handleFilterChange}
          />
          <label className="form-check-label">Comic Books</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="horror"
            checked={filter.horror}
            onChange={handleFilterChange}
          />
          <label className="form-check-label">Horror Books</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="divine"
            checked={filter.divine}
            onChange={handleFilterChange}
          />
          <label className="form-check-label">Divine Books</label>
        </div>
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="sort"
            value="default"
            checked={sort === 'default'}
            onChange={handleSortChange}
          />
          <label className="form-check-label">Default</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="sort"
            value="lowToHigh"
            checked={sort === 'lowToHigh'}
            onChange={handleSortChange}
          />
          <label className="form-check-label">Price: Low to High</label>
        </div>
      </div>
      <BookList books={sortedBooks} />
    </div>
  );
};

export default ParentComponentOne;