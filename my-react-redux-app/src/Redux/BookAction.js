import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from './BookTypes';
 
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});
 
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
 
export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});