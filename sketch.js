 
//  const url ="https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs"
 
 async function newYorkArticle (){
const url ="https://api.nytimes.com/svc/topstories/v2/world.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs";

let response =await  fetch (url);
let newArticles = await response.json();
let articleContainer= document.querySelector (".articles-container");
console.dir (articleContainer);


let latestNews=newArticles.results; //checking all the headlines

for (let i=0; i<latestNews.length; i++) { 

let header=document.createElement("h1");
header.innerHTML= latestNews[i].title;
articleContainer.appendChild (header);

let paragraph=document.createElement ("p");
paragraph.innerHTML=latestNews[i].abstract;
articleContainer.appendChild (paragraph);

let a=document.createElement("a");
a.setAttribute ("href",latestNews[i].url);
a.innerHTML=latestNews[i].title;
articleContainer.appendChild (a);

// console.log (latestNews[i].multimedia[0].url);

let photoCover=document.createElement('img');
photoCover.setAttribute("src",latestNews[i].multimedia[0].url);
articleContainer.appendChild(photoCover);
let published=document.createElement ("p");
published.innerHTML=latestNews[i].published_date;
articleContainer.appendChild ( published);

}
}
newYorkArticle ()
