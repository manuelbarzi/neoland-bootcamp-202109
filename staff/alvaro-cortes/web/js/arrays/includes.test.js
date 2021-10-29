describe("TEST includes")

// CASE 1 //

var arreglo = [1, 2, 3, 4, 5]
var res = includes(arreglo, 5)

if(typeof res === "boolean"
&& res === true)
    success("Test correct")
else
    fail("Test failed")

// CASE 2 //

var arreglo = [1, 2, 3, 4, 5]
var res = includes(arreglo, 2)

if(typeof res === "boolean"
&& res === true)
    success("Test correct")
else
    fail("Test failed")

// CASE 3 //

var arreglo = ["Luis", "Maria", "Ana"]
var res = includes(arreglo, "Maria")

if(typeof res === "boolean"
&& res === true)
    success("Test correct")
else
    fail("Test failed")
