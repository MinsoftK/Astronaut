const images = [
	'beach.jpg',
	'buildings.jpg',
	'lake.jpg',
	'poppies.jpg',
	'flower.jpg',
	'namibia.jpg',
	'sky.jpg',
	'milky-way-984050_1920.jpg',
	'constellations-2609647_1920.jpg',
	'planets-5923806_1920.jpg',
	'stargazing-1149228_1920.jpg',
	'stars-1031123_1920.jpg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//html에 이미지를 넣는 작업
const body = document.querySelector('body');

// 1. img 태그를 body에 추가하는 법
// const putImg = document.createElement('img');

// 2. img의 src 설정
// putImg.src = `img/${chosenImage}`;
// 3. body에 img 태그 추가
// document.body.appendChild(putImg);

putImg = `img/${chosenImage}`;
body.style.backgroundImage = `url(${putImg})`;
body.style.backgroundSize = 'cover';
body.style.backgroundRepeat = 'no-repeat';

console.log('배경사진', putImg);
