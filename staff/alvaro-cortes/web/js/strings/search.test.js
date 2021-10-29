describe("TEST search")

// CASE 1 //

var reg = "/[A-Z]/g"
var res = search("hey Friend!", reg) 

if (typeof res === "number"
    && res === 4)
    success("Test correct")
else
    fail("Test failed")

// CASE 2 //

var reg = "/[!]/g"
var res = search("hey friend!", reg) 

if (typeof res === "number"
    && res === 10)
    success("Test correct")
else
    fail("Test failed")