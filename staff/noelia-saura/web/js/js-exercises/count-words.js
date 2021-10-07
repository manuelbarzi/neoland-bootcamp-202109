function countWords(text) {
    var count = 0
    
for (var i = 0; i < text.length; i++) {
    if (text[i]===' ') {
        count+=1
    }
    
}
 count+=1

    // TODO implement me with a for loop (**DO NOT USE** split)

    return count
}