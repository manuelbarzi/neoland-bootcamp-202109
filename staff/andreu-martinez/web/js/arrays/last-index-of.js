function lastIndexOf(array,value,index){

    for (let i = index? index : array.length-1; i >= 0; i--) {  
        if(array[i] === value) return array.length -1 - i
    }
    return -1
}