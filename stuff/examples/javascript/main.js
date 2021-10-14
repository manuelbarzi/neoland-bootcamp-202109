var title = document.querySelector('h1')

title.onclick = function(){
    if (title.classList.contains('panel--light')){
        title.classList.remove('panel--light')
        title.classList.add('panel--dark')
    }else{
        title.classList.remove('panel--dark')
        title.classList.add('panel--light')
    }
}

var smiley = document.querySelector('span')

smiley.onclick = function(){
    if(smiley.innerText === '😀'){
        smiley.innerText = '🤢'
    }else{
        smiley.innerText = '😀'
    }
}