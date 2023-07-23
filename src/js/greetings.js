const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const todos = document.querySelector("#todo");
const logoutBtn = document.querySelector("#logoutBtn");
const logoutForm = document.querySelector("#logout-form");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

function paintGreetings(username){
    todo.classList.remove("hidden");
    logoutBtn.classList.remove("hidden");
    todo.classList.add("fadeIn");
    greeting.classList.add("fadeIn");
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

function logout(){
  localStorage.removeItem(USERNAME_KEY);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
logoutForm.addEventListener("submit", logout);


if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
else{
  logoutBtn.classList.remove("hidden");
  paintGreetings(savedUsername);
}
