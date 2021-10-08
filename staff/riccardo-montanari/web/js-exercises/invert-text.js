// console.log('DEMO invertText')

// console.log(invertText('hola mundo'))

// console.log(invertText('god'))

// console.log(invertText('abcdef'))


// var letras = ['hola mundo']

// function invertText(text) {

//     var result = ''

//     for (var i = text.length-1; i >= 0; i--) {

//         var reversed = arr[i];



//         result = result + reversed;
    
//     }

//     return result

// }

// console.log(invertText(letras.split))


// function invertText(txt) {

//     var revert ='';
//     var copyTxt = txt;

//     for (var i = 0; i < copyTxt.length; i++) {
//         var position = copyTxt.length -1 -i;
//         revert = revert + copyTxt[position]
        
//     }



//     return revert;
    
// }

// console.log(invertText('hola mundo'))


function invertText(txt) {
    // var copyText =txt;
    return txt.split('').reverse().join('');
}

