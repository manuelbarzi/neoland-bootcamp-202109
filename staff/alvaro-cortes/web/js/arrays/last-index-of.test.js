describe("TEST lasIndexOf")

// CASE 1 //

var arreglo = ["Juan", undefined, "hola", "Moña", 15, "hola"]
var res = lastIndexOf(arreglo, "hola")

if (typeof res === "number"
&& res === 2
&& arreglo[0] === "Juan"
&& arreglo[1] === undefined
&& arreglo[2] === "hola"
&& arreglo[3] === "Moña"
&& arreglo[4] === 15
&& arreglo[5] === "hola")
    success("Test correct")
else
    fail("Test failed")

// CASE 2 //

var arreglo = ["Juan", undefined, "hola", "Moña", 15, "hola"]
var res = lastIndexOf(arreglo, "hola", 3)

if (typeof res === "number"
&& res === 5
&& arreglo[0] === "Juan"
&& arreglo[1] === undefined
&& arreglo[2] === "hola"
&& arreglo[3] === "Moña"
&& arreglo[4] === 15
&& arreglo[5] === "hola")
    success("Test correct")
else
    fail("Test failed")

// CASE 3 //

var arreglo = ["Juan", undefined, "hola", "Moña", 15, "hola"]
var res = lastIndexOf(arreglo, "hola", -1)

if (typeof res === "number"
&& res === 5
&& arreglo[0] === "Juan"
&& arreglo[1] === undefined
&& arreglo[2] === "hola"
&& arreglo[3] === "Moña"
&& arreglo[4] === 15
&& arreglo[5] === "hola")
    success("Test correct")
else
    fail("Test failed")