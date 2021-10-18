describe('TEST concat')

describe('Case 1')

var arr = new Biblio(["hola"], ["como"], ["estas"]);
var res = arr.concat();

if (res instanceof Biblio
    && res[0] === "hola como estas"
    && arr[0][0] === "hola"
    && arr[1][0] === "como"
    && arr[2][0] === "estas")
    success("Test correct")
else
    fail("Test failed")

describe('Case 2')

var arr = new Biblio([200], [true], [false]);
var res = arr.concat();

if (res instanceof Biblio
    && res[0] === "200 true false"
    && arr[0][0] === 200
    && arr[1][0] === true
    && arr[2][0] === false)
    success("Test correct")
else
    fail("Test failed")

describe('Case 3')

var arr = new Biblio([1], ["Mundo"], [1993], ["Hola"]);
var res = arr.concat();

if (res instanceof Biblio
    && res[0] === "1 Mundo 1993 Hola"
    && arr[0][0] === 1
    && arr[1][0] === "Mundo"
    && arr[2][0] === 1993
    && arr[3][0] === "Hola")
    success("Test correct")
else
    fail("Test failed")