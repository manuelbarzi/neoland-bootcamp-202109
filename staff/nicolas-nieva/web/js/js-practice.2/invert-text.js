function invertText(text) {
    // NOTE console.log should not be used here, but return

    var result = ''

for (let i = text.length - 1; i >= 0 ;i--) {
        const letra = text[i];

        var result = result + letra;
        
    } 

    return result
}

// function invertText(txt) {
//     var result = '';
//     var copyTxt = txt;

//     for (var i = 0; i < copyTxt.length; i++) {
//     var position = copyTxt.length - 1 - i;
//     result = result + copyTxt[position];
// }
// return result

// }