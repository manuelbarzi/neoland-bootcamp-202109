function slice(array=[], pos1 = 0, pos2=array.length) {
    var newarray = array

    if (pos1 < 0) {
        newarray = array[array.length + pos1]
    }else if (array.length > pos1) {
        for (let i = pos1; i <= pos2 && i < array.length; i++)
            newarray[newarray.length] = array[i]
        
    }
    return newarray
}