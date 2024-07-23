import { ADD_TODO, DELETE_TODO } from './TodoTypesTypes';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const deleteTodo = (index) => ({
  type: DELETE_TODO,
  payload: index
});