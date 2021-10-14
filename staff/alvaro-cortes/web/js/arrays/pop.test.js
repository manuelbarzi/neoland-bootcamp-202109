describe("TEST pop")

// CASE 1 //

var array1 = ["buen", "dia", "hola", "arreglo", "bienvenido"]
var res = pop(array1)

if(typeof res === "string"
   && res === "bienvenido"
   && res.length === 10)
    success("Test correct")
else 
    fail("Test failed")

// CASE 2 //

var array2 = ["buen", "dia", "bienvenido", "hola", "arreglo"]
var res = pop(array2)

if(typeof res === "string"
   && res === "arreglo"
   && res.length === 7)
    success("Test correct")
else 
    fail("Test failed")

// CASE 3 //

var array3 = ["dia", "bienvenido", "hola", "arreglo", "buen"]
var res = pop(array3)

if(typeof res === "string"
   && res === "buen"
   && res.length === 4)
    success("Test correct")
else 
    fail("Test failed")
