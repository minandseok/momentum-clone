const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form__input");
const toDoAdd = document.querySelector("todo-form__add");

const USERNAME_KEY = "username"

const handleSubmit = (e) => {
  e.preventDefault();
};

toDoInput.addEventListener("submit", handleSubmit);
