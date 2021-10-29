var menuButton = document.querySelector('.menu__button')
var menuList = document.querySelector('.menu__list')
var titulo = document.querySelector('h1')

menuButton.onclick = function(){
    menuList.classList.toggle('menu__list--on')
}