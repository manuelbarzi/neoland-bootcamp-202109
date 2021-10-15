function countLetters(text) {
    let lettersCount = 0

    for (let i = 0; i < text.length; i++) {
        let character = text[i]

        if (character !== ' ') {
            lettersCount++
        }
    }

    return lettersCount
}