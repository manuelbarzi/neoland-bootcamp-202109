describe("TEST pop")

// CASE 1 //

var array1 = ["buen", "dia", "hola", "arreglo", "bienvenido"]
var res = pop(array1)

if(res instanceof Array
   && res.lenght === 4
   && res[0] === "buen" 
   && res[1] === "dia"
   && res[2] === "hola"
   && res[3] === "arreglo")
    success("Test correct")
else 
    fail("Test failed")

// CASE 2 //

var array2 = ["buen", "dia", "bienvenido", "hola", "arreglo"]
var res = pop(array2)

if(res instanceof Array
   && res.lenght === 4
   && res[0] === "buen" 
   && res[1] === "dia"
   && res[2] === "bienvenido"
   && res[3] === "hola")
    success("Test correct")
else 
    fail("Test failed")

// CASE 3 //

var array3 = ["dia", "bienvenido", "hola", "arreglo", "buen"]
var res = pop(array3)

if(res instanceof Array
   && res.lenght === 4
   && res[0] === "dia" 
   && res[1] === "bienvenido"
   && res[2] === "hola"
   && res[3] === "arreglo")
    success("Test correct")
else 
    fail("Test failed")
