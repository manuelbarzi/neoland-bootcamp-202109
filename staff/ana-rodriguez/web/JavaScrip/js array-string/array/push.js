// TODO implement the standalone version of Array.prototype.push()

function push (array,nuevo) {
    res = [...array];
    if( typeof nuevo === 'object'){
        for (var i = 0; i < nuevo.length; i++) {
            res[res.length] = nuevo[i];
        }
        return res;
    } else if( typeof nuevo === 'string'){
        res.push(nuevo);
        return res;
    }
}