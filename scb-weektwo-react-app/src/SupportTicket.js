import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SupportTicket = ({ ticket, onDelete, onEdit }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{ticket.title}</Card.Title>
        <Card.Text>{ticket.description}</Card.Text>
        <Button variant="danger" onClick={() => onDelete(ticket.id)} className="mr-2">
          Delete
        </Button>
        <Button variant="primary" onClick={() => onEdit(ticket)} className="mr-2">
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SupportTicket;