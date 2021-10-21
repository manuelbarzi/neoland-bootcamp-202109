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


function invertText(txt) {

    var revert ='';

    for (var i = 0; i < txt.length; i++) {
        
        var position = txt.length -1 -i;
        revert = revert + txt[position]
        
    }



    return revert;
    
}



