// function some(array, callback) {
//     // TODO
//     //some : comprueba si al menos un elemento del array cumple con la condicion implementada por la funcion proporcionada
//     //devuelve true o flase y false si la condicion en una array es vacia
//     var result = false

//     for (var i = 0; i < array.length; i++) {
//         var element = array[i];
        
//         if(callback(element, i)=== true){
//             result = true
//             return result
//         }
//     }
//     return result
// }

/* quitamos el return result */

// function some(array, callback) {
//    var result = false

//     for (var i = 0; (i < array.length && !result); i++) {
//         var element = array[i];
        
//         if(callback(element, i)){
//             result = true
            
//         }
//     }
//     return result
// }

/* estamos poniendo un if ternario */
function some(array, callback) {
    var result = false
 
     for (var i = 0; (i < array.length && !result); i++) {
         var element = array[i];
         result =(callback(element,i)) ?  true : false;
              }
     return result
 }

 