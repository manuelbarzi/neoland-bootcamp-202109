// CASE 1 //

var res = countWords("Hola!!!")

if (typeof(res) === 'number'
    && res === 1) {
        console.log("Test correct")
    } else {
        console.error("Test failed")
    }

// CASE 2 //

var res = countWords("Al infinito y más allá!")

if (typeof(res) === 'number'
    && res === 5) {
    console.log("Test correct")
} else {
    console.error("Test failed")
}

// CASE 3 //

var res = countWords("Buenos dias. Buenas noches.")

if (typeof(res) === 'number'
    && res === 4) {
    console.log("Test correct")
} else {
    console.error("Test failed")
}