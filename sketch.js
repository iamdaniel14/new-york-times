 
//  const url ="https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs"
 
 async function newYorkArticle (){
const url ="https://api.nytimes.com/svc/topstories/v2/world.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs";

let response =await  fetch (url);
let newArticles = await response.json();


let latestNews=newArticles.results;

for (let i=0; i<latestNews.length; i++) { 

console.log( latestNews[i].title);
console.log( latestNews[i].abstract);
console.log( latestNews[i].url);
let articleUrl=latestNews[i].url;
// document.querySelector('#articles-title').innerHTML= newArticles.response.docs[i].abstract;
//console.log( newArticles.response.docs[i].snippet);
document.querySelector('.articles-snippet').innerHTML= latestNews[i].title;
document.querySelector('.lead_paragraph'). innerHTML=latestNews[i].abstract;
document.querySelector('.articles-url').setAttribute ("href",articleUrl);
document.querySelector('.articles-url').innerHTML=latestNews[i].title;
document.querySelector('.image-url'). src=latestNews[i].multimedia.url;
document.querySelector('.published-date'). innerHTML=latestNews[i].published_date;

console.log (latestNews[i].multimedia.url)
//document.querySelector ('#article-source').innerHTML=newArticles.response.docs[i].source;
//document.querySelector ('.article-url').setAttribute=latestNews[i].url;
}
}
newYorkArticle ()
