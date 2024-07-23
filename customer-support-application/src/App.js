import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TicketList from './components/TicketList';
import AddTicketForm from './components/AddTicketForm';
import TicketDetails from './components/TicketDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Customer Support App</h1>
        </header>
        <Routes>
          <Route path="/" element={<TicketList />} />
          <Route path="/add" element={<AddTicketForm />} />
          <Route path="/ticket/:id" element={<TicketDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;