
function countWords(str) {
    count = 0

    for ( let i = 0; i < str.length;  i++ ) {
        if ( str[i] == ' ' )
            count++
    }

    count++

    return count
}