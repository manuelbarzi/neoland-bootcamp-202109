function split(text, separator) {
    var parts = []

    if(separator === "") {
        for(let i = 0; i < text.length; i++) {
            parts.push(text[i])
        }
    } else if (separator === separator && separator != "") {
        var part = ""
        var count;
        var countSep = 0
        for(let i = 0; i < separator.length; i++) {
            count++  
            if(count === separator[i])
        // borrar count de abajo//    
        count
        }
        

    } else {
        var part = ""
        for(let i = 0; i < text.length; i++) {
            if(text[i] == separator) {
                parts.push(part)
                part = ""
            } else {
                part += text[i]
            }
        }
        parts.push(part)
    }
    return parts

}