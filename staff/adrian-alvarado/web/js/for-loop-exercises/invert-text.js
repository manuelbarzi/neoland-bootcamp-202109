
function invertText(text) {
    let result = ''

    for ( let i = 0; i < text.length; i++ ) {
        textValue = text[ text.length - 1 - i ]
        result += textValue
    }

    return result
}