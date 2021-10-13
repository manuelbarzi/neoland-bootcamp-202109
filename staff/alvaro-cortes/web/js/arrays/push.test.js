describe("TEST push")

// CASE 1 //

var array1 = ["buen", "dia", "hola", "arreglo", "bienvenido"]
var res = pop(array1, "push")

if(res instanceof Array
   && res.lenght === 6
   && res[0] === "buen" 
   && res[1] === "dia"
   && res[2] === "hola"
   && res[3] === "arreglo"
   && res[4] === "bienvenido"
   && res[5] === "push")
    success("Test correct")
else 
    fail("Test failed")

// CASE 2 //

var array1 = ["buen", "dia", "hola"]
var res = pop(array1, "noche")

if(res instanceof Array
   && res.lenght === 4
   && res[0] === "buen" 
   && res[1] === "dia"
   && res[2] === "hola"
   && res[3] === "noche")
    success("Test correct")
else 
    fail("Test failed")

// CASE 3 //

var array1 = ["buen", "dia", "hola"]
var res = pop(array1, "ultimo")

if(res instanceof Array
   && res.lenght === 4
   && res[0] === "buen" 
   && res[1] === "dia"
   && res[2] === "hola"
   && res[3] === "ultimo")
    success("Test correct")
else 
    fail("Test failed")