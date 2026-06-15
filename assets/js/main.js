window.addEventListener("scroll", () => {

const header = document.querySelector(".header");

if(window.scrollY > 50){

header.style.background = "rgba(0,0,0,0.95)";
header.style.transition = "0.4s";

}else{

header.style.background = "rgba(0,0,0,0.75)";

}

});