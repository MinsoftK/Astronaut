const API_KEY = config.MY_API_KEY;
function GeoOk(pos) {
	console.log(pos);
	//위도
	const lat = pos.coords.latitude;
	//경도
	const lon = pos.coords.longitude;
	const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
	//promise 비동기처리
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			const weather = document.querySelector('#weather span:first-child');
			const city = document.querySelector('#weather div');
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].description} / ${Math.round(
				data.main.temp
			)}°C`;
		});
}
function GeoFail() {
	alert("Can't find you");
}

//위치 인식 성공시 GeoOk 반환, 실패시 GeoFail 반환
navigator.geolocation.getCurrentPosition(GeoOk, GeoFail);
