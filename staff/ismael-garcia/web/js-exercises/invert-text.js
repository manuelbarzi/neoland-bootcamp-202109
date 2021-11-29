function invertText(text) {
    var result = '';
    var copyText = text;

    for (var i = 0; i < copyText.length; i++) {
        var position = copyText.length - (1 + i)
        result += copyText[position] 
    }
    /* Otra posible solución, pero no preferida, porque cambia la estructura "natural" del for loop:
    for (var i = copyText.length - 1; i >= 0; i--) {
        result += copyText[i]
        
    } */
    return result;
    
}

// Otra manera de hacerlo:

function invertText(text) {
    var copyText = text;
    return copyText.split("").reverse().join("")

}
