// TODO implement the standalone version of Array.prototype.concat()


function concat() {  //concat(arguments) - 
    //arguments = [[1, 2, 3] [8, 6, 4]]  //hay dos bloques de arrays
    //arguments = [arguments[0] = [arguments[0][0]], [arguments[0][1]]
    //Recibe dos o más arrays. Devuelve un nuevo array  que es la suma de todos los arrays
    // que ha recibido 
    
    var result = [] ; // [1, 900, 5] es decir [result[0]], result[1], result[2], result [3]

    for (var i = 0; i < arguments.length; i ++ ) { // [arguments[0] = [1,2,3], 
                                                    // arguments [1] = [8,6,4] ejemplo del case 1
        //var array = arguments[i]; también se puede solucionar creando una var y que ahi se guarde los i

        for (var j = 0; j < arguments[i]; j++) //otro loop dentro del loop grande
       // result.push(array[j]) esto va añadiendo 
       // result[result.length] = array[j]

       result[result.length] = arguments[i][j]

  // result[result.length] = argument[i][j] //tambien este srive

    }
   return result
}
