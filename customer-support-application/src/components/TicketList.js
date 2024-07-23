import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await axios.get('http://localhost:3000/tickets');
      setTickets(response.data);
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <h2>Support Tickets</h2>
      <Link to="/add">Add Ticket</Link>
      <ul>
        {tickets.map(ticket => (
          <li key={ticket.id}>
            <Link to={`/ticket/${ticket.id}`}>
              Ticket #{ticket.id} - {ticket.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;