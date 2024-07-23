import React, { useState } from 'react';
import axios from 'axios';

const AddTicketForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTicket = { title, description };
    await axios.post('http://localhost:3000/tickets', newTicket);
    // Redirect or navigate back to ticket list
    window.location.href = '/';
  };

  return (
    <div>
      <h2>Add New Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddTicketForm;