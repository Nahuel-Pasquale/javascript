// 1 definimos nuestras variables
const input = document.querySelector('.input-text');
const addForm = document.querySelector('.add-form');
const tasksList = document.querySelector('.tasks-list');
const deleteBtn = document.querySelector('.deleteAll-btn');

// traigo los elementos del storage en caso que haya y sino hay nada traigo un array vacio
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// a medida que voy agregando tareas, las almaceno en el localstorage
const saveLocalStorage = (taskList) => {
  localStorage.setItem('tasks', JSON.stringify(taskList))
};

// cree nuestro elemento a renderizar
const createTask = task =>
  `
    <li>${task.name}
      <img class="delete-btn" src="./img/delete.svg" alt="boton de borrar" data-id=${task.taskId}>
    </li>
  `;

const renderTaskList = todoList => {
  tasksList.innerHTML = todoList.map(task => createTask(task)).join('');
  // console.log(tasksList.innerHTML);
}

// crear la logica de esconder el boton delete-All
const hideDeleteAll = taskList => {
  if(!taskList.length){
    deleteBtn.classList.add('hidden');
    return
  }
  deleteBtn.classList.remove('hidden');
}

const addTask = e => {
  e.preventDefault();
  const taskName = input.value.trim();
  if (!taskName.length){
    alert('Por favor, ingrese una tarea');
    return;
  } else if (tasks.some(task => task.name.toLowerCase() === taskName.toLowerCase())) {
    alert('Ya existe una tarea con ese nombre');
    return;
  }

  tasks = [...tasks, { name: taskName, taskId: tasks.length + 1 }];
  input.value = '';

  renderTaskList(tasks);
  saveLocalStorage(tasks);
  hideDeleteAll(tasks);
}

const removeTask = e => {
  if(!e.target.classList.contains('delete-btn')) return;
  const filterId = Number(e.target.dataset.id);
  console.log(filterId);
  tasks = tasks.filter(task => task.taskId !== filterId);
  renderTaskList(tasks);
  saveLocalStorage(tasks);
  hideDeleteAll(tasks);
}

const removeAll = () => {
  tasks = [];
  renderTaskList(tasks);
  saveLocalStorage(tasks);
  hideDeleteAll(tasks);
}

// crear funcion init()

const init = () => {
  renderTaskList(tasks)
  addForm.addEventListener('submit', addTask);
  tasksList.addEventListener('click', removeTask);
  deleteBtn.addEventListener('click', removeAll);
  hideDeleteAll(tasks);
};

init();