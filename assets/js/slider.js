const hero = document.querySelector(".hero");

const images = [

"assets/images/hero/hero1.jpg",
"assets/images/hero/hero2.jpg",
"assets/images/hero/hero3.jpg"

];

let current = 0;

function changeSlide(){

hero.style.backgroundImage =
`url('${images[current]}')`;

current++;

if(current >= images.length){

current = 0;

}

}

changeSlide();

setInterval(changeSlide,4000);