import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import { Outlet } from 'react-router-dom';
 
function App() {
  localStorage.setItem('token','Invalid')
  return (
    <div className="App">
      <NavigationBar />
        <Outlet />
    </div>
  );
}
 
export default App;

