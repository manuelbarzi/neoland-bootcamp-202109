function every(array, callback){
    for (let i = 0; i < array.length; i++) {
        var element = array[i];

    if(!callback(element, i)) return false
        
    }
    return true
}