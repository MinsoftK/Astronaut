const loginForm = document.getElementById('login-form');
const loginInput = loginForm.querySelector('input');
const greet = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(e) {
	e.preventDefault();
	const userName = loginInput.value;
	console.log(userName);
	localStorage.setItem(USERNAME_KEY, userName);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	greeting(userName);
}

function greeting(username) {
	greet.innerText = `Hello ${username}.`;
	greet.classList.remove(HIDDEN_CLASSNAME);
}

const isUserNameSaved = localStorage.getItem(USERNAME_KEY);
console.log(isUserNameSaved);
if (isUserNameSaved === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener('submit', onLoginSubmit);
} else {
	console.log(loginForm);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	greeting(isUserNameSaved);
}
