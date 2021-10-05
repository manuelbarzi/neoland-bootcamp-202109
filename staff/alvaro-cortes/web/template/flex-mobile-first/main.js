var hamburger = document.querySelector("i")
var nav = document.querySelector(".nav__bar--off")
var navOn = document.querySelector(".nav__bar--off")
var des = document.querySelector(".grid__head")

hamburger.addEventListener("click", function(){
    nav.classList.toggle("nav__bar--off");
})