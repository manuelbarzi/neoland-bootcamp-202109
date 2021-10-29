// // TODO implement the standalone version of Array.prototype.concat()

// function concat () {
//     var result = []
//  for (let i = 0; i < arguments.length; i++) {
//      const array = arguments[i];}

//      for (let j = 0; j < arguments[i].length; j++) {
//          var value = array[i]
//          result[result.length] = value
//      }  
//      return value
//  }   

// function concat() {
//     var result = [];

//     for (let i = 0; i < arguments.length; i++) {
//         var array = arguments[i]
//         for (let j = 0; j < array.length; j++) {
//             result[result.length] = array[j]    
//         }    
//     }
//     return result;
// }

function concat() {
    var result = []

    for (var i = 0; i < arguments.length; i++) {
        var array = arguments[i]

        for (var j = 0; j < array.length; j++) {
            var element = array[j]
            result.push(element)
        }
    }
   
    return result
}
