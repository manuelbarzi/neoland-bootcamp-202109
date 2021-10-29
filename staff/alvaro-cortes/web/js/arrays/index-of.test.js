describe("TEST indexOf")

// CASE 1 //

var array = ["hola", "mundo", 22, 14, "chau"]
var res = indexOf(array, 22)

if (typeof res === "number")
        success("Test correct")
    else
        fail("Test failed")

// CASE 2 //

var array = ["Buen", "dia", "Luis", 08, true]
var res = indexOf(array, true)

if (typeof res ==="number")
        success("Test correct")
    else
        fail("Test failed")

// CASE 3 //

var array = ["undefined", "mundo", "1555", 14, "chau"]
var res = indexOf(array, "1555")

if (typeof res ==="number")
        success("Test correct")
    else
        fail("Test failed")    
        
// CASE 4 //

var array = ["undefined", "mundo", "1555", 14, "chau"]
var res = indexOf(array, "1555", 1)

if (typeof res ==="number")
        success("Test correct")
    else
        fail("Test failed")     