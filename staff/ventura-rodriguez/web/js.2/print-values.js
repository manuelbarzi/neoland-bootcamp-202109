// function printValues(values) {
//     for (var i = 0; i < values.length; i++) {
//         var value = values[i]
//         console.log(value)
//     }    
// }

function printValues(values) {
    var copyValues = values;
    copyValues.forEach(e => console.log(e))
}