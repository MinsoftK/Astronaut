# Astronaut

## Toy Project (2021.07.31 ~ 진행중)

JS를 이용한 Chrome App 제작 Momentum 앱을 보고 영감을 받아서 나만의 커스터마이징한 Chrome App 클론코딩시작
[Momentum이란?](https://momentumdash.com/)

구현한 사이트 [Demo](https://minsoftk.github.io/Astronaut/)

## 주요 기능

1. Todo리스트의 추가 & 삭제 👉[code](https://github.com/MinsoftK/Astronaut/blob/49fdec6b8a3591705ec5bcfd07bb23a47dcda10d/js/todo.js#L16)

   Local스토리지에 username과 Todos의 리스트를 저장한다. 처음에 어려웠던 부분은 Todos의 목록을 지울때 어떻게 Todos의 Array에서 해당 값을 찾을것인가였다. 처음엔 `innerText`값이 일치하는 `idx`를 반환해주려 했다. 하지만 만약 Todos에 동일한 "운동하기", "운동하기" 원소가 있다면, `idx`먼저 찾은 `idx`가 반환이 되기에 사용할 수 없었다. 어떤 항목을 삭제해야하는지 정확하게 알려줄 수 있어야 했다. 이는 [시간값](https://github.com/MinsoftK/Astronaut/blob/49fdec6b8a3591705ec5bcfd07bb23a47dcda10d/js/todo.js#L50)을 가진 `id`를 추가해 Object로 만들어 Todos를 만들어 해결했다.

2. 사용자의 이름을 기억 👉[code](https://github.com/MinsoftK/Astronaut/blob/49fdec6b8a3591705ec5bcfd07bb23a47dcda10d/js/todo.js#L60)  
   Local스토리지를 사용해 username과 TodoList의 항목을 저장했다. 사용자의 이름을 기억 한다면 Login Form을 더이상 표시하지 않는다.

3. 현재시간표시 👉[code](https://github.com/MinsoftK/Astronaut/blob/49fdec6b8a3591705ec5bcfd07bb23a47dcda10d/js/clock.js)  
   JS에 내장된 함수를 이용해 시간을 만들었다. 내장된 함수들을 이용하여 format이 '00:00:00'이 되도록 간단하게 출력할 수 있었다.

4. 현재 위치와 날씨 표시 👉[code](https://github.com/MinsoftK/Astronaut/blob/main/js/weather.js)  
   (https://openweathermap.org/)  
   JS에서 제공하는 내장함수를 사용해 위도와 경도를 구할 수 있었다. 이러한 정보를 바탕으로 openweather에서 제공하는 API로 날씨 정보를 비동기 처리로 가져올 수 있었다.

5. 랜덤한 사진과 주식 관련 인용구 표시

```js
const num = Math.floor(Math.random() * quotes.length);
```

내장된 Math 모듈을 이용해 랜덤한 사진과 인용구들을 출력하게 했다.
사진출처 : [Pixabay](https://pixabay.com/ko/)

## 트러블슈팅 && 추가할 항목

- https://newsapi.org/s/south-korea-news-api  
   api를 이용한 뉴스 모아보기 페이지 별도 생성
- todos에 transition 효과 추가하기
- PC에서는 화면이 정상적이나 스마트폰처럼 화면이 작을 경우 화면 비율이 깨지는 문제가 있음. 화면 비율 조정

* 백엔드부분
