// elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

//گرفتن وظیفه از لوکال استورج
let todos = JSON.parse(localStorage.getItem('todos')) || [];

//نمایش همه کارهای موجود
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo.text;
    if (todo.completed) li.classList.add('completed');

    li.addEventListener('click', () => toggleComplete(index));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTodo(index);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

//اضافه یک وظیفه جدید
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = {
    text: todoInput.value,
    completed: false
  };
  todos.push(newTodo);
  todoInput.value = '';
  saveAndRender();
});

//پاک کردن وظیفه
function deleteTodo(index) {
  todos.splice(index, 1);
  saveAndRender();
}

//تغییر حالت 
function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  saveAndRender();
}

//نمایش دادن و ذخیره کردن در لوکال استورج
function saveAndRender() {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}

//نمایش اولیه
renderTodos();
