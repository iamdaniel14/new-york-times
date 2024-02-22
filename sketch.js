 
//  const url ="https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs"
 
 async function newYorkArticle (){

const url ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sports&api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs";

let response =await  fetch (url);
let newArticles = await response.json();
// console.log (json);

console.log( newArticles.response.docs[5].abstract);
console.log( newArticles.response.docs[5].source);
console.log( newArticles.response.docs[5].web_url);

// document.querySelector('#articles-title').innerHTML= newArticles.response.docs[5].abstract;
console.log( newArticles.response.docs[5].snippet);
document.querySelector('#articles-snippet').innerHTML=newArticles.response.docs[5].snippet;
document.querySelector('#lead_paragraph').innerHTML=newArticles.response.docs[5].lead_paragraph;
document.querySelector ('#article-source').innerHTML=newArticles.response.docs[5].source;
document.querySelector ('#image-url').innerHTML=newArticles.response.docs[5].multimedia.url;
console.log (newArticles.response.multimedia [5].url)
}
newYorkArticle ()
