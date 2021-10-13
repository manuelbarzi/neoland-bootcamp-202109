
function countWords(text) {
    var words = 0
   
    for (var i = 0; i < text.length; i++) {
        var palabras = text[i] 

    if (palabras !== ' ' )
    words++
    }

    // TODO implement me with a for loop (**DO NOT USE** split)

    return words
}