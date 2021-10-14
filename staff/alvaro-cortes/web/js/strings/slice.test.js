describe("TEST slice")

// CASE 1 //

var string = 'The quick brown fox jumps over the lazy dog.'
var res = slice(string, 31)

if (typeof res === "string"
&& res === "the lazy dog")
    success("Test correct")
else
    fail("Test failed")

// CASE 2 //

var string = 'The quick brown fox jumps over the lazy dog.'
var res = slice(string, 4, 19)

if (typeof res === "string"
&& res === "quick brown fox")
    success("Test correct")
else
    fail("Test failed")

// CASE 3 //

var string = 'The quick brown fox jumps over the lazy dog.'
var res = slice(string, -4)

if (typeof res === "string"
&& res === "dog.")
    success("Test correct")
else
    fail("Test failed")

// CASE 4 //

var string = 'The quick brown fox jumps over the lazy dog.'
var res = slice(string, -9, -5)

if (typeof res === "string"
&& res === "lazy")
    success("Test correct")
else
    fail("Test failed")