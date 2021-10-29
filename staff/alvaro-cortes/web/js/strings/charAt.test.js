describe("Test charAt")

// CASE 1 //

var res = chartAt("hola", 3)

if(typeof res === "string"
&& res === "a")
    success("Test correct")
else
    fail("Test failed")

// CASE 2 //

var res = chartAt("hola Luis", 5)

if(typeof res === "string"
&& res === "L")
    success("Test correct")
else
    fail("Test failed")

// CASE 3 //

var res = chartAt("hola Marta", 7)

if(typeof res === "string"
&& res === "r")
    success("Test correct")
else
    fail("Test failed")

// CASE 4 //

var res = chartAt("hola Marta", 12)

if(typeof res === "string"
&& res === "")
    success("Test correct")
else
    fail("Test failed")