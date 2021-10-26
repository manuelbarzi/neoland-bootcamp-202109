function repeat(str, count){
    var res = ''
    count = Math.floor(count)
   
    while (count > 0 && count !== Infinity){
        res += str;
        count --; 
    }
    res = count === 0 ? res : 'range error';
    return res 
}