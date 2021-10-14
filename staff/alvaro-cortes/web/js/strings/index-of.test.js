describe("TEST indexOf")

// CASE 1 //

var res = indexOf("Hola mundo", "m")

if(typeof res === "number"
    && res === 5)
        success("Test correct")
    else 
        fail("Test failed")

// CASE 2 //

var res = indexOf("Buenos dias", " ")

if(typeof res === "number"
    && res === 6)
        success("Test correct")
    else 
        fail("Test failed")

// CASE 3 //

var res = indexOf("Buenos dias", "s")

if(typeof res === "number"
    && res === 5)
        success("Test correct")
    else 
        fail("Test failed")

// CASE 4 //

var res = indexOf("Buenos dias", "ue")

if(typeof res === "number"
    && res === 1)
        success("Test correct")
    else 
        fail("Test failed")  
        
// CASE 5 //

var res = indexOf("Buenos dias, nosdias", "nosd")

if(typeof res === "number"
    && res === 13)
        success("Test correct")
    else 
        fail("Test failed")  