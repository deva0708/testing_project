import React, { useState, useEffect } from 'react';
import { Form, InputGroup, Button, DropdownButton, Dropdown } from 'react-bootstrap';

const MessageInput = ({ onSend }) => {
  const [input, setInput] = useState('');
  const [sender, setSender] = useState('customer');

  useEffect(() => {
    if (onSend) {
      setInput('');
    }
  }, [onSend]);

  const handleSend = () => {
    if (input.trim()) {
      onSend(input, sender);
      setInput('');
    }
  };

  return (
    <InputGroup className="message-input">
      <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-secondary"
        title={sender === 'customer' ? 'Customer' : 'Support'}
        id="input-group-dropdown-1"
      >
        <Dropdown.Item onClick={() => setSender('customer')}>Customer</Dropdown.Item>
        <Dropdown.Item onClick={() => setSender('support')}>Support</Dropdown.Item>
      </DropdownButton>
      <Form.Control
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSend();
        }}
      />
      <Button variant="primary" onClick={handleSend}>Send</Button>
    </InputGroup>
  );
};

export default MessageInput;