import React, { useReducer } from 'react';
import './App.css';

// Define the initial state
const initialState = [
  { id: 1, name: 'John Doe', dateOfJoining: '2020-01-01' },
  { id: 2, name: 'Jane Smith', dateOfJoining: '2021-02-15' },
];

// Define action types
const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return [...state, action.payload];
    case REMOVE_EMPLOYEE:
      return state.filter(emp => emp.id !== action.payload);
    default:
      return state;
  }
};

// Action creators
const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  payload: employee,
});

const removeEmployee = (id) => ({
  type: REMOVE_EMPLOYEE,
  payload: id,
});

const EmployeeManagement = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newEmployee, setNewEmployee] = React.useState({ id: '', name: '', dateOfJoining: '' });

  const handleAddEmployee = () => {
    const { id, name, dateOfJoining } = newEmployee;
    if (id && name && dateOfJoining) {
      dispatch(addEmployee(newEmployee));
      setNewEmployee({ id: '', name: '', dateOfJoining: '' }); // Reset the input fields
    }
  };

  const handleRemoveEmployee = (id) => {
    dispatch(removeEmployee(id));
  };

  return (
    <div className="App">
      <h1>Employee Management</h1>
      <ul>
        {state.map(emp => (
          <li key={emp.id}>
            {emp.name} (Joined: {emp.dateOfJoining})
            <button onClick={() => handleRemoveEmployee(emp.id)}>Resigned</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>New Joinee</h2>
        <input
          type="text"
          placeholder="ID"
          value={newEmployee.id}
          onChange={e => setNewEmployee({ ...newEmployee, id: e.target.value })}
        />
        <input
          type="text"
          placeholder="Name"
          value={newEmployee.name}
          onChange={e => setNewEmployee({ ...newEmployee, name: e.target.value })}
        />
        <input
          type="date"
          value={newEmployee.dateOfJoining}
          onChange={e => setNewEmployee({ ...newEmployee, dateOfJoining: e.target.value })}
        />
        <button onClick={handleAddEmployee}>Add New Joinee</button>
      </div>
    </div>
  );
};

export default EmployeeManagement;