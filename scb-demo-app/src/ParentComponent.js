import React, { useState, useMemo } from 'react';
import { allBooks, shuffleBooks } from './books';
import BookList from './BookList';

const ParentComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState({
    comic: false,
    horror: false,
    divine: false,
  });
  const [sort, setSort] = useState('default');

  const shuffledBooks = useMemo(() => shuffleBooks(allBooks), []);

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

  const filteredBooks = useMemo(() => {
    return shuffledBooks.filter((book) => {
      const matchesSearch = book.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter =
        (filter.comic && book.id <= 10) ||
        (filter.horror && book.id > 10 && book.id <= 20) ||
        (filter.divine && book.id > 20) ||
        (!filter.comic && !filter.horror && !filter.divine);
      return matchesSearch && matchesFilter;
    });
  }, [shuffledBooks, searchTerm, filter]);

  const sortedBooks = useMemo(() => {
    if (sort === 'lowToHigh') {
      return [...filteredBooks].sort((a, b) => a.price - b.price);
    }
    return filteredBooks;
  }, [filteredBooks, sort]);

  return (
    <div>
      <h1>Book List</h1>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div>
          <label>
            <input
              type="checkbox"
              name="comic"
              checked={filter.comic}
              onChange={handleFilterChange}
            />
            Comic Books
          </label>
          <label>
            <input
              type="checkbox"
              name="horror"
              checked={filter.horror}
              onChange={handleFilterChange}
            />
            Horror Books
          </label>
          <label>
            <input
              type="checkbox"
              name="divine"
              checked={filter.divine}
              onChange={handleFilterChange}
            />
            Divine Books
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="sort"
              value="default"
              checked={sort === 'default'}
              onChange={handleSortChange}
            />
            Default
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="lowToHigh"
              checked={sort === 'lowToHigh'}
              onChange={handleSortChange}
            />
            Price: Low to High
          </label>
        </div>
      </div>
      <BookList books={sortedBooks} />
    </div>
  );
};

export default ParentComponent;