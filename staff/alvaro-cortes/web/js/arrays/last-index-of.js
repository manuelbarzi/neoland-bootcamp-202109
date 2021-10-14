function lastIndexOf(array, value, fromIndex) {

    if (fromIndex < 0) {
        for(let i = array.length - 1; i >= 0; i--) {
            if (array[i] === value)
            return i
        }
    } else {
        for (let i = fromIndex? fromIndex : 0; i < array.length; i++) {
            if (array[i] === value)
            return i
        }
    } 
}