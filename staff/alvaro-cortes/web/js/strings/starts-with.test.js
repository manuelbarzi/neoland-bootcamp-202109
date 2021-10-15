describe("TEST startWith")

// CASE 1 /

var string = "hola paula"
var res = startWith(string, "pa")

if(typeof res === "boolean"
&& res === false)
    success("Test correct")
else
    fail("Test failed")

// CASE 2 /

var string = "hola paula"
var res = startWith(string, "hola")

if(typeof res === "boolean"
&& res === true)
    success("Test correct")
else
    fail("Test failed")

// CASE 3 /

var string = "hola paula"
var res = startWith(string, "hola pa")

if(typeof res === "boolean"
&& res === true)
    success("Test correct")
else
    fail("Test failed")

// CASE 4 /

var string = "hola paula"
var res = startWith(string, "hola Pa")

if(typeof res === "boolean"
&& res === false)
    success("Test correct")
else
    fail("Test failed")

// CASE 5 /

var string = "hola paola"
var res = startWith(string, "ola", 7)

if(typeof res === "boolean"
&& res === true)
    success("Test correct")
else
    fail("Test failed")