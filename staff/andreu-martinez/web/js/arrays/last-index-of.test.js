describe("TEST lastindexof")

// CASE 1

var array = [2, 5, 5, 1, 3]
var res=lastIndexOf(array,5,2)

if (typeof res === "number"
    && res === 2)
    success("test ok")
    else fail("test failed")

// CASE 2

var array = [2, 5, 5, 1, 3]
var res=lastIndexOf(array,7,2)

if (typeof res === "number"
    && res === -1)
    success("test ok")
    else fail("test failed")

// CASE 3

var array = [2, 5, 5, 1, 3]
var res=lastIndexOf(array,5)

if (typeof res === "number"
    && res === 2)
    success("test ok")
    else fail("test failed")

// CASE 5

var array = [2, 5, 5, 1, 3]
var res=lastIndexOf(array,5,-4)

if (typeof res === "number"
    && res === 2)
    success("test ok")
    else fail("test failed")