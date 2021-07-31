const images = ['rainny.jpg', 'rainny2.jpg', 'beach.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(`출력되는 이미지: ${chosenImage}`);

//html에 이미지를 넣는 작업
const body = document.getElementById('body');
// const putImg = document.createElement('img');
// putImg.src = `img/${chosenImage}`;
console.log('배경사진', putImg);

body.style.background = `url(.img/${chosenImage})`;
