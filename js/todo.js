const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
//todos를 저장할 array
let todos = [];

function setLocal() {
	//JSON.stringify를 이용하면 object나 array를 string으로 바꿔준다.
	localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

//삭제했을때도 local 정보 삭제
function deleteTodo(e) {
	const li = e.target.parentElement;
	const temp = li.id;
	console.log(temp);
	li.remove();

	//로컬스토리지 정보 제거
	const span = li.querySelector('span');

	setLocal();
}

//li를 만들고 span을 태그 안에 삽입. todoList안에 삽입. 삭제할 버튼 삽입.
function makeTodo(newTodoObj) {
	const li = document.createElement('li');
	//newTodoObj의 id를 li id로 준다.
	li.id = newTodoObj.id;
	const span = document.createElement('span');
	const button = document.createElement('button');
	span.innerText = newTodoObj.text;
	button.innerText = '❌';
	//버튼을 눌렀을때 list 삭제
	button.addEventListener('click', deleteTodo);
	li.appendChild(span);
	li.appendChild(button);

	//todolist에 리스트 자식으로 넣기
	todoList.appendChild(li);
	console.log(todoList);
}

//submit을 했을때 초기화와 새로고침 취소
function handleTodoSumbit(e) {
	e.preventDefault();
	const newTodo = todoInput.value;
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	};
	todoInput.value = '';
	todos.push(newTodoObj);

	//정보 기억을 위한 local에 저장
	setLocal();
	makeTodo(newTodoObj);
}

const temp = localStorage.getItem(TODOS_KEY);
if (temp !== null) {
	const parsedTodo = JSON.parse(temp);
	//todos가 빈 배열로 시작하기 때문에 새로 입력된 todo만 저장이 된다.
	//todos에 parsedTodo를 다시 입력해줘야함.
	todos = parsedTodo;

	parsedTodo.forEach((element) => {
		makeTodo(element);
	});
}

todoForm.addEventListener('submit', handleTodoSumbit);
