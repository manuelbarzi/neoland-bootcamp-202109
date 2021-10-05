var menuButton = document.querySelector('.menu__button')
var navBar = document.querySelector('.nav-bar')

menuButton.onclick = function() {
    navBar.classList.toggle('nav-bar--on')
}