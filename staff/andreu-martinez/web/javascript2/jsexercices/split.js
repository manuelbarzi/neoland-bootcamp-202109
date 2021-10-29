function split(text, separator) {
    var parts = []

    if (separator === '') {
        for (var i = 0; i < text.length; i++) {
            var character = text[i]

            parts[i] = character
        }
    } else if (separator.length === 1) {
        var part = ''

        for (var i = 0; i < text.length; i++) {
            let character = text[i]

            if (character === separator) {
                parts[parts.length] = part

                part = ''
            } else {
                part += character // part = part + character
            }
        }


    } else {
        var part = ''
        var divisor = ''

        for (let i = 0; i < text.length; i++) {
            let character = text[i]
            part += character
            if (character === separator[0]) {
               let x = i
                for (let j = 0; j < separator.length; j++) {
                    divisor += text[x]
                    x++
                }
                
                if(divisor === separator){
                    parts[parts.length] = part
                }

            }

        }
    }
    parts[parts.length] = part

    return parts
}