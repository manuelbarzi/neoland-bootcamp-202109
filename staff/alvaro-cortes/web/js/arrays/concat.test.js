describe('TEST concat')

// CASE 1 //

var res = concat(["hola"], ["como"], ["estas"])

if (res instanceof Array
&& res.length === 3
&& res[0] === 'hola'
&& res[1] === 'como'
&& res[2] === 'estas') 
        success("Test correct")
    else 
        fail("Test failed")

// CASE 2 //

var res = concat([200], [true], [false])

if (res instanceof Array
    && res.length === 3
    && res[0] === "200"
    && res[1] === "true"
    && res[2] === "false")
        success("Test correct")
    else
        fail("Test failed")

// CASE 3 //

var res = concat([1], ["Mundo"], [1993], ["Hola"])

if (res instanceof Array
    && res.length === 4
    && res[0] === "1"
    && res[1] === "Mundo"
    && res[2] === "1993"
    && res[3] === "Hola")
        success("Test correct")
    else 
        failed("Test failed")