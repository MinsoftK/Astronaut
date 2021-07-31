const clock = document.querySelector('h2#clock');

//00 formatting
function putZero(time) {}

//intervals
function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, '0');
	const min = String(date.getMinutes()).padStart(2, '0');
	const sec = String(date.getSeconds()).padStart(2, '0');

	const time = `${hours}:${min}:${sec}`;
	clock.innerText = time;
	5;
}

//sayHELLO 함수를 5초동안 실행함.
//setInterval(sayHello, 5000);

//setTimeout 3초 뒤에 sayhello를 실행
//setTimeout(sayHello, 3000);

getClock();
setInterval(getClock, 1000);
