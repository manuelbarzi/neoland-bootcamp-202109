function push (array, element){
    for (let i = 1; i < arguments.length; i++) {
        array[array.length] = arguments[i]
       
        return array.length
    }
    
}