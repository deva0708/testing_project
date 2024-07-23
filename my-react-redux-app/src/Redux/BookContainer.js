import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from './BookAction';
 
const BookContainer = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingText, setEditingText] = useState('');
 
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({ id: Date.now(), text: newTodo }));
      console.log('devarajuadd',newTodo)
      setNewTodo('');
    }
  };
 
  const handleDeleteTodo = (id) => {
    console.log('id',id);
    dispatch(deleteTodo(id));
  };
 
  const handleEditTodo = (todo) => {
    console.log('id111',todo.text);
    setEditingTodo(todo);
    setEditingText(todo.text);
  };
 
  const handleUpdateTodo = () => {
    if (editingText.trim()) {
      dispatch(updateTodo({ ...editingTodo, text: editingText }));
      console.log("updateTodo",editingText)
      setEditingTodo(null);
      setEditingText('');
    }
  };
 
  return (
    <div >
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => handleEditTodo(todo)}>Edit</button>
          </li>
        ))}
      </ul>
      {editingTodo && (
        <div>
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
            placeholder="Edit todo"
          />
          <button onClick={handleUpdateTodo}>Update Todo</button>
        </div>
      )}
    </div>
  );
};
 
export default BookContainer;