Biblio.prototype.filter = function (callback) {
    var result = new Biblio
    var j = 0

    for (let i = 0; i < this.length; i++) {
        let element = this[i];

        if (callback(element, i)) {
            result[j] = element
            j++
            result.length++
        }
    }

    return result
}



























// function filter(array, callback) {
//     var result = []

//     for (let i = 0; i < array.length; i++) {
//         let element = array[i];

//         if (callback(element, i)) {
//             result[result.length] = element
//         }
//     }

//     return result
// }