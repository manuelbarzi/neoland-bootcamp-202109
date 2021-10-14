function concat() {
    temp = []

    for (let i = 0; i < arguments.length; i++) {
        temp[temp.length]= arguments[i]
    }
    return temp
}