const apiUrl = "https://api.jikan.moe/v4"
const searchText =document.querySelector ("#searchText")
const searchResults =document.querySelector ("#searchResults")

searchText.addEventListener("keyup",function (){
if (this.value.length > 3) {
    getAnimes(this.value)
}

})
 async function getAnimes(query){
const res =await fetch (`${apiUrl}/anime?q=${query}`)
const animes =await res.json()

if (animes.data.length > 0) {
    searchResults.style.display ="block"
searchResults.innerHTML =""
animes.data.map (anime => {
searchResults.innerHTML += `
<li class ="singleAnimes" data-image ="${anime.images.jpg.image_url}"> 
<a href="${anime.url}" target ="_blank"> ${anime.title} </a>
</li>
`;

})
const singleAnimes =Array.from(document.querySelectorAll(".singleAnimes"))
const displayImage =document.querySelector("#displayImage")

singleAnimes.map (singleAnime => {
    singleAnime.addEventListener("mouseenter",function () {
      displayImage.style.display ="block" 
      displayImage.innerHTML =` <img src="${this.dataset.image}" > ` 
    })
    singleAnime.addEventListener("mouseout",function () {
        displayImage.style.display ="none" 
      })
   

})
}
}
const topTvAnime = document.querySelector('#topTvAnime')
async function getTopAnime() {

const res = await fetch(`${apiUrl}/top/anime`) ;
const topAnimes = await res.json()
console.log(topAnimes.data);

topAnimes.data.map(topAnime => {
    topTvAnime.innerHTML +=`
    <div class="col-lg-3 col-md-6">
<div class="item">
<div class="thumb">
  <a href="${topAnime.url}">
  <img src="${topAnime.images.jpg.image_url}" alt="">
  </a>
  <span class="price">${topAnime.score}</span>
</div>
<div class="down-content">
  <span class="category">${topAnime.source}</span>
  <h4>${topAnime.title}</h4>
</div>
</div>
</div>
    `
})
}
getTopAnime()


const upcomingseries = document.querySelector('#upcomingseries')
async function getUpcomingSeries() {
const res = await fetch(`${apiUrl}/seasons/upcoming`) ;
const upcomingserieses = await res.json()

upcomingserieses.data.map(item => {
  upcomingseries.innerHTML +=`
    <div class="col-lg-2 col-md-6 col-sm-6">
    <div class="item">
      <div class="thumb">
        <a href="${item.url}"><img src="${item.images.jpg.image_url}" alt=""></a>
      </div>
      <div class="down-content">
          <span class="category">Adventure</span>
          <h4>${item.title.substring(0,20)}</h4>
      </div>
    </div>
  </div> 
    `
})
}
getUpcomingSeries()

const randomcharacter = document.querySelector('#randomcharacter')
async function getRandomCharacter(){
  const response =await fetch (`${apiUrl}/random/characters`) ;
const RCD = await response.json()
randomcharacter.innerHTML = `
<img src="${RCD.data.images.jpg.image_url}" alt="">
<span class="price">${RCD.data.favorites}</span>
<span class="name">${RCD.data.name}</span>
`

}
getRandomCharacter()



//  const categories = document.querySelector('#categories')
//  async function getCategories(){
//    const res =await fetch (`${apiUrl}/genres/anime`) ;
//  const categorieses = await res.json()
//  categorieses.data.map(itm => {
//   categories.innerHTML +=`
//   <div class="col-lg col-sm-6 col-xs-12">
//   <div class="item">
//     <h4>${itm.title}</h4>
//     <div class="thumb">
//       <a href="${itm.url}"><img src="${itm.images.jpg.image_url}" alt=""></a>
//     </div>
//   </div>
// </div>
//     `
// })
// }
// getCategories()

/* <div class="col-lg-3 col-md-6">
<div class="item">
<div class="thumb">
  <a href="product-details.html"><img src="assets/images/trending-01.jpg" alt=""></a>
  <span class="price"><em>$28</em>$20</span>
</div>
<div class="down-content">
  <span class="category">Action</span>
  <h4>Assassin Creed</h4>
  <a href="product-details.html"><i class="fa fa-shopping-bag"></i></a>
</div>
</div>
</div>  */

/* <div class="col-lg-2 col-md-6 col-sm-6">
          <div class="item">
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/top-game-01.jpg" alt=""></a>
            </div>
            <div class="down-content">
                <span class="category">Adventure</span>
                <h4>Assasin Creed</h4>
                <a href="product-details.html">Explore</a>
            </div>
          </div>
        </div> */


        // <img src="assets/images/banner-image.jpg" alt="">
        // <span class="price">$22</span>
        // <span class="offer">-40%</span>

/* <div class="col-lg col-sm-6 col-xs-12">
          <div class="item">
            <h4>Action</h4>
            <div class="thumb">
              <a href="product-details.html"><img src="assets/images/categories-01.jpg" alt=""></a>
            </div>
          </div>
        </div> */
















