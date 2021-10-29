describe("TEST push")

// CASE 1 //

var array1 = ["buen", "dia", "hola", "arreglo", "bienvenido"]
var res = push(array1, "push")

if(res instanceof Array
   && res.length === 6
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
var res = push(array1, "noche")

if(res instanceof Array
   && res.length === 4
   && res[0] === "buen" 
   && res[1] === "dia"
   && res[2] === "hola"
   && res[3] === "noche")
    success("Test correct")
else 
    fail("Test failed")

// CASE 3 //

var array1 = ["buen", "dia", "hola"]
var res = push(array1, "ultimo")

if(res instanceof Array
   && res.length === 4
   && res[0] === "buen" 
   && res[1] === "dia"
   && res[2] === "hola"
   && res[3] === "ultimo")
    success("Test correct")
else 
    fail("Test failed")

// CASE 4 //

var array1 = ["buen", "dia", "hola"]
var res = push(array1, "ultimo", "mono", "sideral")

if(res instanceof Array
   && res.length === 6
   && res[0] === "buen" 
   && res[1] === "dia"
   && res[2] === "hola"
   && res[3] === "ultimo"
   && res[4] === "mono"
   && res[5] === "sideral")
    success("Test correct")
else 
    fail("Test failed")