
var title = document.querySelector('h1')
title.onclick = function() {

    if (title.classList.contains ('panel--light')){
        title.classList.remove ('panel--light')
        title.classList.add ('pannel--dark')
    } else {
        title.classList.remove('panel--dark') 
        title.classList.add('panel--light')
}
}

var smiley = document.querySelector('span')
smiley.onclick = function() {
    if (smiley.innerText === '😭') {
        smiley.innerText = '😁'
    } else {
        smiley.innerText = '😭'
    }
}

var sun = document.querySelector('p')
sun.onclick = function(){
    if (sun.innerText=== '☀️'){
        sun.innerText = '🌙'
    }else {
        sun.innerText = '☀️'
    }
    }


var menuButton = document.querySelector('.menu__button')
var menuList = document.querySelector('.menu__list')

menuButton.onclick = function (){
    menuList.classList.toggle('menu__list--on')
}