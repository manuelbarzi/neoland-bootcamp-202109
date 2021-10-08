function countWords(text) {
    var count = 0

    // TODO implement me with a for loop (**DO NOT USE** split)

    for (var i = 0; i < text.length; i++) {
        
        if (text[i] === ' ' ) {
            count = count + 1;
        } 
        
    }

    count = count + 1;

    return count
}


