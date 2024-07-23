document.addEventListener('DOMContentLoaded', () => {
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');
    const addButton = document.getElementById('addButton');
    const todoList = document.getElementById('todoList');
    
    let todos = [];
    let editIndex = null;
  
    const renderTodos = () => {
      todoList.innerHTML = '';
      todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'todo-item');
        if (todo.completionDate) {
          li.classList.add('completed');
        }
        li.innerHTML = `
          <div>
            <p>Description: ${todo.description}</p>
            <p>Date: ${todo.date}</p>
            <p>Completion Date: ${todo.completionDate ? todo.completionDate : 'Not completed'}</p>
            <button class="btn btn-secondary btn-sm mr-2" onclick="editTodo(${index})">Edit</button>
            <button class="btn btn-success btn-sm" onclick="doneTodo(${index})">Done</button>
          </div>
        `;
        todoList.appendChild(li);
      });
    };
  
    const addTodo = () => {
      const description = descriptionInput.value.trim();
      const date = dateInput.value.trim();
      
      if (description && date) {
        if (editIndex !== null) {
          todos[editIndex] = {
            ...todos[editIndex],
            description,
            date,
          };
          editIndex = null;
        } else {
          const newTodo = {
            description,
            date,
            completionDate: null,
          };
          todos.push(newTodo);
        }
        descriptionInput.value = '';
        dateInput.value = '';
        renderTodos();
      }
    };
  
    const editTodo = (index) => {
      const todo = todos[index];
      descriptionInput.value = todo.description;
      dateInput.value = todo.date;
      editIndex = index;
    };
  
    const doneTodo = (index) => {
      todos[index].completionDate = new Date().toISOString().split('T')[0];
      renderTodos();
    };
  
    addButton.addEventListener('click', addTodo);
  
    window.editTodo = editTodo;
    window.doneTodo = doneTodo;
  
    renderTodos();
  });