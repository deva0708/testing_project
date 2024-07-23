import React, { useEffect, useState } from 'react';
import { Card, Button, Modal, Form } from 'react-bootstrap';
import ChatMessage from './ChatMessage';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [editingMessage, setEditingMessage] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages", error);
    }
  };

  const addMessage = async (message) => {
    try {
      const response = await fetch('http://localhost:5000/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
      });
      const data = await response.json();
      setMessages(prevMessages => [...prevMessages, data]);
    } catch (error) {
      console.error("Error adding message", error);
    }
  };

  const updateMessage = async (id, newText) => {
    try {
      const response = await fetch(`http://localhost:5000/messages/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newText })
      });
      const data = await response.json();
      setMessages(prevMessages => prevMessages.map(msg => (msg.id === id ? data : msg)));
      setEditingMessage(null);
    } catch (error) {
      console.error("Error updating message", error);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await fetch(`http://localhost:5000/messages/${id}`, {
        method: 'DELETE'
      });
      setMessages(prevMessages => prevMessages.filter(msg => msg.id !== id));
    } catch (error) {
      console.error("Error deleting message", error);
    }
  };

  const handleEditMessage = (message) => {
    // Check if the sender is allowed to edit the message
    if (message.sender === 'customer') {
      setEditingMessage(message);
      setEditText(message.text);
      setShowEditModal(true);
    } else {
      alert('You cannot edit support messages.');
    }
  };

  const handleSaveEdit = () => {
    updateMessage(editingMessage.id, editText);
    setShowEditModal(false);
  };

  return (
    <Card className="chat-window">
      <Card.Body className="messages">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg}
            onEdit={handleEditMessage}
            onDelete={deleteMessage}
          />
        ))}
      </Card.Body>
      <Card.Footer>
        <MessageInput
          onSend={(text, sender) => {
            addMessage({ text, sender });
          }}
        />
      </Card.Footer>
      
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleSaveEdit}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default ChatWindow;