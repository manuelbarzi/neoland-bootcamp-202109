function invertText(word) {
    var newWord = ""
    var position;

    // Mejor metodo //
    for(let i = 0; i < word.length; i++) {
        position = word.length -1 - i;
        newWord += word[position] 
    }
    for(let i = word.length -1; i >= 0; i--) {
        newWord += word[i]
    }
    console.log(newWord)
}