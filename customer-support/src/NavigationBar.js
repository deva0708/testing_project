import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// import SCB_logo from '../SCB_logo.jpg';
import './NavigationBar.css';
// import Banking_logo from '../Banking_logo.jpg';
import Login from './Login';
 
function NavigationBar() {
  return (
    <div className="navigation-container">
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand>
            {/* <img src={SCB_logo} alt="scb logo" className="App-logo" /> */}
            <NavLink to='/' className="navbar-brand text-white">SCB React App</NavLink>
          </Navbar.Brand>
 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to='/faq' className="nav-link text-white">FAQ</NavLink>
              <NavLink to='/announcements' className="nav-link text-white">Announcements</NavLink>
              <NavLink to='/login' className="nav-link text-white">Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}
 
export default NavigationBar;