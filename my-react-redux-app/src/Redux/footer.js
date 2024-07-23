import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
 
const Footer = () => {
  const [show, setShow] = useState(false);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <footer className="bg-primary text-center p-3">
      <Button type="button" class="btn btn-light" onClick={handleShow}>Checkout</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Total Items: {totalQuantity}</p>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Proceed to Payment</Button>
        </Modal.Footer>
      </Modal>
    </footer>
  );
};
 
export default Footer;