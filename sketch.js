 
//  const url ="https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs"
let headlinesContainer= document.querySelector (".headlines-container");
let newsCategory=document.querySelector('#news-category');
let categoryContainer =document.querySelector('#categoryContainer');
let categories=["business","sports","technology","obituaries","fashion","realestate"];
const category="sports";

let url;
window.onload = () =>{
url=`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs`;
fetchTopStories ();

}

 async function fetchTopStories (){
// const url ="https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs";
try{

 url=`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs`;
let response =await  fetch (url);
let newArticles = await response.json();
//  return newArticles .results; //checking all the headlines
 displayTopStories(newArticles.results)
}catch (err){
console.log ("no data is fetch");
console.error(err);
}

 }

 function displayTopStories(latestNews) { 
// for (let i=0; i<latestNews.length; i++)
latestNews.forEach((topStory) => { 
let newsContainer=document.createElement("div"); //making a new news container for each loop
newsContainer.classList.add("headline-section");
// console.log (newsContainer);

let header=document.createElement("h1");
header.textContent= topStory.title;
header.classList.add("headline-title");
newsContainer.appendChild (header);

let paragraph=document.createElement ("p");
paragraph.textContent=topStory.abstract;
paragraph.classList.add("headline-paragraph");
newsContainer.appendChild (paragraph);

let a=document.createElement("a");
a.setAttribute ("href",topStory.url);
a.textContent=topStory.title;
a.classList.add ("headline-link");
newsContainer.appendChild (a);


let photoCover=document.createElement('img');
photoCover.setAttribute("src",topStory.multimedia[0].url);
photoCover.classList.add ("headline-photo-cover")
newsContainer.appendChild(photoCover);
let published=document.createElement ("p");
published.textContent=topStory.published_date;
published.classList.add("headline-published");
newsContainer.appendChild ( published);
headlinesContainer.appendChild(newsContainer); //adding new div to a parent div (headlines-container);
})

}

//define the function a execute it immediately with ()
//  (async ()=> {
//     try{
//      latestNews= await (fetchTopStories ())
//     displayTopStories(latestNews);
//     } catch(err){
//     console.log("failed to fetch random stories");
//     console.error(err);
//     }
// })();

const changingCategory=(e,category)=>{
let newsCategory=document.querySelectorAll (".category-option");
newsCategory.forEach((element)=>{
element.classList.remove('active')
});

 url=`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs`;
 e.target.classList.add("active");
  fetchTopStories ();

}

function Category(){
categoryContainer .innerHTML
for (let category of categories){
categoryContainer.innerHTML+=`<button class="category-option ${category=="sports" ? "active":""}" onclick="changingCategory(event,'${category}')">${category} </button>`
console.log(categoryContainer);
 }
}

Category();
