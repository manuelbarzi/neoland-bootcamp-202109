function lastIndexOf(array, value, fromIndex) {
   var indexFinal;

    if (fromIndex < 0) {
        for(let i = array.length + fromIndex; i >= 0; i--) {
            if (array[i] === value)
            indexFinal = i
        }
    } else {
        for (let i = fromIndex? fromIndex : 0; i < array.length; i++) {
            if (array[i] === value)
            indexFinal = i
        }
    } 

    if(indexFinal !== undefined) return indexFinal
    else return -1
}