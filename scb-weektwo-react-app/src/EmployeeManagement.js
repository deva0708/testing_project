import React, { useReducer } from 'react';
import './App.css';

const initialState = [
  { id: 1, name: 'Deva', dateOfJoining: '2024-05-30' },
  { id: 2, name: 'Raju', dateOfJoining: '2024-06-06' },
];

const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

const reducer = (state, action) => {
    console.log("action", action)
    console.log("action type", action.type)
    console.log("action payload", action.payload)

  switch (action.type) {
    case ADD_EMPLOYEE:
      return [...state, action.payload];
    case REMOVE_EMPLOYEE:
      return state.filter(emp => emp.id !== action.payload);

    default:
      return state;
  }
};


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
    console.log('empoyee', newEmployee);
    if (id && name && dateOfJoining) {
      dispatch(addEmployee(newEmployee));
      setNewEmployee({ id: '', name: '', dateOfJoining: '' }); 
    }
  };

  const handleRemoveEmployee = (id) => {
    dispatch(removeEmployee(id));
    console.log('Resign Employee', removeEmployee(id))
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