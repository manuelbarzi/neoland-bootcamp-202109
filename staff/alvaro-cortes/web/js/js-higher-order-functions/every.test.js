describe("TEST every")

describe("Case 1")

var array1 = [15, 30, 39, 29, 11, 13];
function higherThan10(element, index) {
    items[index] = element
    return element > 10
}
var items = []
var res = every(array1, higherThan10)

if (typeof res === "boolean"
    && res === true
    && array1.length === 6
    && items[0] === array1[0]
    && items[1] === array1[1]
    && items[2] === array1[2]
    && items[3] === array1[3]
    && items[4] === array1[4]
    && items[5] === array1[5])
    success("Test correct")
else
    fail("Test failed")

describe("Case 2")

var array1 = [10, 30, 4, 2, 66, 20];
function rest(element, index) {
    items[index] = element
    return element % 2 === 0
}
var items = []
var res = every(array1, rest)

if (typeof res === "boolean"
    && res === true
    && array1.length === 6
    && items[0] === array1[0]
    && items[1] === array1[1]
    && items[2] === array1[2]
    && items[3] === array1[3]
    && items[4] === array1[4]
    && items[5] === array1[5])
    success("Test correct")
else
    fail("Test failed")

describe("Case 3")

var array1 = [10, 30, 15, 2, 7, 20];
function rest(element, index) {
    items[index] = element
    return element % 2 === 0
}
var items = []
var res = every(array1, rest)

if (typeof res === "boolean"
    && res === false
    && array1.length === 6
    && items[0] === array1[0]
    && items[1] === array1[1]
    && items[2] === array1[2])
    success("Test correct")
else
    fail("Test failed")

