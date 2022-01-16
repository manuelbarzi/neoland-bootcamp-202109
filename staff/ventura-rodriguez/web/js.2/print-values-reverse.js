// function printValuesReverse(values) {
//     for (var i = values.length - 1; i >= 0; i--) {
//         var value = values[i];
//         console.log(value);
//     }
// }

function printValuesReverse(values) {
    for (var i = 0; i < values.length; i++) {
        var value = values[values.length -1 - i];
        console.log(value);
    }
}