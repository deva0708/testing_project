import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TicketDetails = () => {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const fetchTicket = async () => {
      const response = await axios.get(`http://localhost:3000/tickets/${id}`);
      setTicket(response.data);
    };
    fetchTicket();
  }, [id]);

  if (!ticket) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Ticket Details</h2>
      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
    </div>
  );
};

export default TicketDetails;