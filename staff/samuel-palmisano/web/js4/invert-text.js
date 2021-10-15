function invertText(text) {
    var result = ''

    for (var i = text.length - 1; i >= 0; i--) {
        result = result + text[i]
        
    }

    return result
    
    //Puedes eliminar return result y meter console.log(result)
    //(quitando tambien los console.log de la demo)

}