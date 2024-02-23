 
//  const url ="https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs"
 
 async function newYorkArticle (){
const url ="https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs";

let response =await  fetch (url);
let newArticles = await response.json();

let headlinesContainer= document.querySelector (".headlines-container");
console.dir (newArticles);


let latestNews=newArticles .results; //checking all the headlines

for (let i=0; i<latestNews.length; i++) { 

let newsContainer=document.createElement("div"); //making a new news container for each loop
newsContainer.classList.add("headline-section")
// console.log (newsContainer);

let header=document.createElement("h1");
header.textContent= latestNews[i].title;
header.classList.add("headline-title");
newsContainer.appendChild (header);

let paragraph=document.createElement ("p");
paragraph.textContent=latestNews[i].abstract;
paragraph.classList.add("headline-paragraph");
newsContainer.appendChild (paragraph);

let a=document.createElement("a");
a.setAttribute ("href",latestNews[i].url);
a.textContent=latestNews[i].title;
a.classList.add ("headline-link");
newsContainer.appendChild (a);

// console.log (latestNews[i].multimedia[0].url);
let photoCover=document.createElement('img');
photoCover.setAttribute("src",latestNews[i].multimedia[0].url);
photoCover.classList.add ("headline-photo-cover")
newsContainer.appendChild(photoCover);

let published=document.createElement ("p");
published.textContent=latestNews[i].published_date;
published.classList.add("headline-published");
newsContainer.appendChild ( published);

headlinesContainer.appendChild(newsContainer); //adding new div to a parent div (headlines-container);
console.log ( headlinesContainer);

}
}
newYorkArticle ()
