# 🚀 Astronaut

## 🌞 Toy Project (2021.07.30 ~ )

NomadCoder의 [크롬앱 클론코딩](https://nomadcoders.co/javascript-for-beginners/lobby)을 보면서 클론코딩 시작. 만들어보면서 내가 추가하고 싶은 기능과 고민한 부분들 기록했다. Momentum을 처음 접해봤는데, 보고나서 나만의 커스터마이징 Chrome App을 만들고 싶었다. 그러다 Astronaut란 우주를 컨셉으로 웹앱을 만들어보고 싶었다.

[Momentum?](https://momentumdash.com/)

[Demo](https://minsoftk.github.io/Astronaut/)

  <br/>
  
## 🌕 주요 기능

### 1. Todo리스트의 추가 & 삭제 👉[code](https://github.com/MinsoftK/Astronaut/blob/49fdec6b8a3591705ec5bcfd07bb23a47dcda10d/js/todo.js#L16)

- 할일을 입력하고 완료했으면 삭제 버튼을 눌러 삭제 할 수 있다. Local스토리지에 Todo 리스트가 저장되므로 페이지를 새로고침해도 사라지지 않는다.

  <br/>

<center><img src="https://github.com/MinsoftK/Astronaut/blob/main/img/example2.png?raw=true" width="600" height="200"/></center>

<br/>

### 2. 사용자의 이름을 기억 👉 [code](https://github.com/MinsoftK/Astronaut/blob/49fdec6b8a3591705ec5bcfd07bb23a47dcda10d/js/todo.js#L60)

- Local스토리지를 사용해 username을 저장한다. 사용자의 이름을 기억 한다면 Login Form을 더이상 표시하지 않는다.

<br/>

  <center><img src="https://github.com/MinsoftK/Astronaut/blob/main/img/example3.png?raw=true" width="600" height="200"/></center>
<br/>

### 3. 현재 위치와 날씨 표시 👉 [code](https://github.com/MinsoftK/Astronaut/blob/main/js/weather.js)

(https://openweathermap.org/)

- JS에서 제공하는 내장함수를 사용해 위도와 경도를 구할 수 있었다. 이러한 정보를 바탕으로 openweather에서 제공하는 API로 날씨 정보를 비동기 처리로 가져올 수 있었다. openweather사이트에서 api를 발급받자. 이후 [MY_WEATHER_API_KEY](https://github.com/MinsoftK/Astronaut/blob/e260d256599315c167a53be85930301e57cc540c/js/weather.js#L1) 부분을 본인의 api key로 바꿔준 뒤, index.html을 열어보면 아래 그림 오른쪽 상단에서 날씨, 온도, 지역의 정보를 확인할 수 있다.

  <br/>

<center><img src="https://github.com/MinsoftK/Astronaut/blob/main/img/example.png?raw=true" width="600" height="200"/></center>
<br/>

### 4. 랜덤한 사진과 주식 관련 인용구 표시

```js
const num = Math.floor(Math.random() * quotes.length);
```

- 내장된 Math 모듈을 이용해 랜덤한 사진과 인용구들을 출력하게 했다.  
  사진출처 : [Pixabay](https://pixabay.com/ko/)

<br/>

## 🛰 트러블슈팅

- Todo 리스트 관리 👉 [code](https://github.com/MinsoftK/Astronaut/blob/f136bcded1d823dfea580cf11fb4106e1bcd3734/js/todo.js#L50)

  - Local스토리지에 username과 Todos의 리스트를 저장한다. 처음에 어려웠던 부분은 Todos의 목록을 지울때 어떻게 Todos의 Array에서 해당 값을 찾을것인가였다. 처음엔 `innerText`값이 일치하는 `idx`를 반환해주려 했다. 하지만 만약 Todos에 동일한 "운동하기", "운동하기" 원소가 있다면, `idx`먼저 찾은 `idx`가 반환이 되기에 사용할 수 없었다. 어떤 항목을 삭제해야하는지 정확하게 알려줄 수 있어야 했다. 이는 [시간값](https://github.com/MinsoftK/Astronaut/blob/49fdec6b8a3591705ec5bcfd07bb23a47dcda10d/js/todo.js#L50)을 가진 `id`를 추가해 Object로 만들어 Todos를 만들어 해결할 수 있었다.

    <br/>

* 시간 표시 포맷

  - 시간을 표시할 때, 숫자가 `int`형으로 반환되기 때문에 0~9까지의 숫자가 `03`으로 표시되는 것이 아닌 `3`으로 표시됐다. 처음에는 숫자가 0 ~ 10 사이일때를 판단하여 앞 string에 '0'을 추가하려했지만 기존의 `padStart()`라는 내장함수를 사용해 쉽게 해결할 수 있었다.

  ```js
  const hours = String(date.getHours()).padStart(2, '0');
  ```

  <br/>

* API 관련 이슈  
  API 기능 작동을 보여주기 위해서 api키를 넣어서 deploy 해야만 했다. 하지만 `gitguardian`에서 api키가 노출이 됐다고 이메일이 왔다. 검색을 해보니 api키를 함부로 공개하면 악의적인 목적으로 사용할 수 있기 때문에 감춰야한다고 한다. 공개된 api가 악용된 어떤 사례들이 있는지는 찾기가 힘들었다. 클라이언트 단에서 api를 감추고 요청을 할 수 있는 방법은 없었다. 결론은 proxy같은 서버를 이용해서 요청을 대신 처리하거나 서버 사이드를 이용해 처리하는 것이였다. 내 프로젝트는 html 파일에 임베디드된 스크립트라서 `dontenv` 같은 라이브러리를 사용할 수 없었다. React에서는 .env 파일을 이용해 `%API_KEY%`처럼 사용가능. React가 왜 많이 쓰이는지 조금씩 깨닫는 중..
  <br/>

* 화면비율
  아직도 미스터리인 부분이 처음에 inspection으로 확인했을때, 스마트폰에서 접속시 페이지가 짤리는 현상이 발생. 이를 해결하기 위해 미디어쿼리나 보는 화면 비율 그대로 보기 위해서 추가해봤지만 정확한 원인을 이해를 하지 못함. [이 곳](https://prup.tistory.com/14)에서 화면 비율을 줄이는 css를 body에 추가했더니 제대로 보임. 근데 다시 body의 css를 지워도 이전의 문제가 발생하지 않음. 오묘한 css
  <br/><br/>

## 보완점

- PC에서는 화면이 정상적이나 스마트폰처럼 화면이 작아질 경우 todo의 span이 다음줄로 넘어가는것. 미디어쿼리를 이용해 모바일용 css를 따로 만들어야 됨.

- Todos에 transition 효과
- api를 이용한 뉴스 모아보기 페이지 별도 생성
- 백엔드와 연결?

* https://newsapi.org/s/south-korea-news-api 뉴스페이지 추가하기
* (https://namjackson.tistory.com/27) 날씨 이미지 추가하기
