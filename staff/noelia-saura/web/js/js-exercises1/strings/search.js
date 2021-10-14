// STBY
// TODO implement the standalone version of String.prototype.search()
//busca una palabra en el string y devuelve en donde se situa
//devuelve el numero teniendo en cuenta cada letra del string

// function frases(frase, palabra) {
//     var search = frase.search(palabra)
//     return search
// }

function search(text, str) {
    var pos = -1
    var j = 0
    var found = false

    for (let i = 0; i < text.length && found === false; i++) {
        char = text[i]
        if (char === str[j]) {
            j++
            if(j === str.length)
            {
                found = true
                pos = i-j + 1
            }
        }else j = 0
    }
    return pos
}