const images = ['rainny.jpg', 'rainny2.jpg', 'beach.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(`출력되는 이미지: ${chosenImage}`);

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
body.style.backgroundSize = '100% 100%';
body.style.backgroundRepeat = 'no-repeat';

console.log('배경사진', putImg);
