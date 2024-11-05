const nameForm = document.querySelector(".name-form");
const nameFormInput = document.querySelector(".name-form__input");
const userName = document.querySelector(".username");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const handleNameSubmit = (event) => {
  event.preventDefault();
  nameForm.classList.add(HIDDEN_CLASSNAME);
  const inputUserName = nameFormInput.value;
  localStorage.setItem(USERNAME_KEY, inputUserName);
  showName(inputUserName);
};

const showName = (savedUserName) => {
  userName.innerText = savedUserName;
};

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  nameForm.classList.remove(HIDDEN_CLASSNAME);
  nameForm.addEventListener("submit", handleNameSubmit);
} else {
  showName(savedUserName);
}
