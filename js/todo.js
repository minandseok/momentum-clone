const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form__input");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
};

const paintToDo = (newToDo) => {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;

  const button = document.createElement("button");
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-xmark");
  button.appendChild(icon);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);

  button.addEventListener("click", deleteToDo);
};

const handleToDoSubmit = (event) => {
  event.preventDefault();

  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

[1].filter;
