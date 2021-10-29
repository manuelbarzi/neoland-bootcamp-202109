function countWords(text) {
    var count = 0;

    for(let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            count++
        } 
    }
    count++
    return count
}