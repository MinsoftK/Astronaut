const newsIcon = document.querySelector('newsListBlock');
const NEWS_API_KEY = 'b296d7212b79483d8d9813d53fa04244';

console.log(newsIcon);
function onClickNews(e) {
	console.log(e);
}

newsIcon.addEventListener('Click', onClickNews);
