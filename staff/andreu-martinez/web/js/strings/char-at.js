function charAt(string, position) {
    char = ''

    if(position >= 0)
    char = position <= string.length && position ? string[position] : ''
    
    return char
}