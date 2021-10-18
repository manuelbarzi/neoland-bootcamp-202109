// function filter(array, callback) {
//     var result = []
//     var j = 0

//     for (let i = 0; i < array.length; i++) {
//         let element = array[i];

//         if ( callback(element, i) ) {
//             result[j] = element
//             j++
//         }
//     }

//     return result
// }



function filter(array, callback) {
    var result = []

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (callback(element, i)) {
            result[result.length] = element
        }
    }

    return result
}