import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const ChatMessage = ({ message, onEdit, onDelete }) => {
  return (
    <div className={`chat-message ${message.sender === 'customer' ? 'customer' : 'support'}`}>
      <p>{message.text}</p>
      <ButtonGroup>
        <Button variant="primary" size="sm" onClick={() => onEdit(message)}>Edit</Button>
        <Button variant="danger" size="sm" onClick={() => onDelete(message.id)}>Delete</Button>
      </ButtonGroup>
    </div>
  );
};

export default ChatMessage;