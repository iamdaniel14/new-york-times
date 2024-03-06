 
//  const url ="https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs"
let headlinesContainer= document.querySelector (".headlines-container");
let newsCategory=document.querySelector('#news-category');
let categoryContainer =document.querySelector('#categoryContainer');
let categories=["business","sports","technology","obituaries","fashion","realestate"];
let newCategoryTitle=document.querySelector(".category-title");
 let category="sports";

let url;
 async function fetchTopStories (){
try{

 url=`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=m2el98Ix9bYGsagBRzWNVuH9ysGouuSs`;
let response =await  fetch (url);
let newArticles = await response.json();
return newArticles.results
}catch (err){
console.log ("no data is fetch");
console.error(err);
}

 }

 function displayTopStories(latestNews) { 
// for (let i=0; i<latestNews.length; i++)
headlinesContainer.innerHTML = '' //clear existing content
latestNews.forEach((topStory) => { 
let newsContainer=document.createElement("div"); //making a new news container for each loop
newsContainer.classList.add("headline-section");


let header=document.createElement("h1");
header.textContent= topStory.title;
header.classList.add("headline-title");
newsContainer.appendChild (header);

let paragraph=document.createElement ("p");
paragraph.textContent=topStory.abstract;
paragraph.classList.add("headline-paragraph");
newsContainer.appendChild (paragraph);



let photoCover=document.createElement('img');
photoCover.setAttribute("src",topStory.multimedia[0].url);
photoCover.classList.add ("headline-photo-cover")
newsContainer.appendChild(photoCover);
let published=document.createElement ("p");
published.textContent=topStory.published_date;
published.classList.add("headline-published");
newsContainer.appendChild ( published);


let a=document.createElement("a");
a.setAttribute ("href",topStory.url);
a.textContent=topStory.title;
a.innerHTML="Read more";
a.classList.add ("headline-link");
newsContainer.appendChild (a);
headlinesContainer.appendChild(newsContainer); //adding new div to a parent div (headlines-container);
})

}

function changingCategory(event,newCategory){
let newsCategory=document.querySelectorAll (".category-option");

newsCategory.forEach((element)=>{
element.classList.remove('active')
});

event.target.classList.add("active");

category= newCategory; //changing the global category
showNews  (category); //calling new with updated category


newCategoryTitle.innerHTML=newCategory;  //changing the new category according to the one that is clicked

}

function Category(){
categories.forEach((category)=> { 
categoryContainer.innerHTML+=`<button class="category-option ${category=="sports" ? "active":""}" onclick="changingCategory(event,'${category}')">${category} </button>`;

 })
}

async function showNews (){
  let news=await fetchTopStories();
  displayTopStories(news);
}





Category();
showNews ()


