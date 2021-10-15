function countEachVocal(text) {

    let counter = { a: 0, e: 0, i: 0, o: 0, u: 0 }

    for (let i = 0; i < text.length; i++) {
        let char = text[i]

        if (char === 'a' || char === 'á' || char === 'à' || char === 'ä') {
            counter.a++
        } else if (char === 'e' || char === 'é' || char === 'è' || char === 'ë') {
            counter.e++
        } else if (char === 'i' || char === 'í' || char === 'ì' || char === 'ï') {
            counter.i++
        } else if (char === 'o' || char === 'ó' || char === 'ò' || char === 'ö') {
            counter.o++
        } else if (char === 'u' || char === 'ú' || char === 'ù' || char === 'ü') {
            counter.u++
        }
    }

    return counter
}