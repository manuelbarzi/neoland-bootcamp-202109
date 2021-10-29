function chartAt(string, index) {

    if (index > string.length - 1) 
        return ""
    else {

        for (let i = 0; i < string.length; i++) {
            if (index === i)
            return string[i]
        }
    }
}