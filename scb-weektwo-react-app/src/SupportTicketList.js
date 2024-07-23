import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import SupportTicket from './SupportTicket';
import SupportTicketForm from './SupportTicketForm';

const SupportTicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editTicket, setEditTicket] = useState(null);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await fetch('http://localhost:5000/tickets');
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      console.error('Error fetching tickets', error);
    }
  };

  const addTicket = async (ticket) => {
    try {
      const response = await fetch('http://localhost:5000/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ticket),
      });
      const data = await response.json();
      setTickets([...tickets, data]);
      setShowForm(false);
    } catch (error) {
      console.error('Error adding ticket', error);
    }
  };

  const updateTicket = async (ticket) => {
    try {
      const response = await fetch(`http://localhost:5000/tickets/${ticket.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ticket),
      });
      const data = await response.json();
      setTickets(tickets.map((t) => (t.id === ticket.id ? data : t)));
      setEditTicket(null);
      setShowForm(false);
    } catch (error) {
      console.error('Error updating ticket', error);
    }
  };

  const deleteTicket = async (id) => {
    try {
      await fetch(`http://localhost:5000/tickets/${id}`, {
        method: 'DELETE',
      });
      setTickets(tickets.filter((t) => t.id !== id));
    } catch (error) {
      console.error('Error deleting ticket', error);
    }
  };

  const handleEdit = (ticket) => {
    setEditTicket(ticket);
    setShowForm(true);
  };

  return (
    <Container>
      <h1 className="my-4">Customer Support Tickets</h1>
      <Button variant="primary" onClick={() => setShowForm(true)} className="mb-4">
        Add Ticket
      </Button>
      {tickets.map((ticket) => (
        <SupportTicket key={ticket.id} ticket={ticket} onDelete={deleteTicket} onEdit={handleEdit} />
      ))}
      <SupportTicketForm
        show={showForm}
        onHide={() => {
          setEditTicket(null);
          setShowForm(false);
        }}
        onSubmit={(ticket) => {
          if (editTicket) {
            updateTicket({ ...editTicket, ...ticket });
          } else {
            addTicket(ticket);
          }
        }}
        initialValues={editTicket || {}}
      />
    </Container>
  );
};

export default SupportTicketList;