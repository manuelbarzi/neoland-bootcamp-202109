function reverse(array) {
    
    /*for(let i = 0; i < array.length; i++) {
        newArray.unshift(array[i])
    }*/

    /*for(let i = 0; i < array.length / 2; i++) {
        array[array.length - 1 - i] = array[i]
        
    }*/ 

    for(var i = 0; i < array.length / 2; i++) {
        var temp = array[i]
       
        array[i] = array[array.length - 1 - i]
        
        array[array.length - 1 - i] = temp
    }
    return array
}