describe("TEST pop")

describe('Case 1')

var array1 = new Biblio ("buen", "dia", "hola", "arreglo", "bienvenido");
var res = array1.pop();

if(typeof res === "string"
   && res === "bienvenido"
   && res.length === 10)
    success("Test correct")
else 
    fail("Test failed")

describe('Case 2')

var array2 = new Biblio ("buen", "dia", "bienvenido", "hola", "arreglo");
var res = array2.pop();

if(typeof res === "string"
   && res === "arreglo"
   && res.length === 7)
    success("Test correct")
else 
    fail("Test failed")

describe('Case 3')

var array3 = new Biblio ("dia", "bienvenido", "hola", "arreglo", "buen");
var res = array3.pop();

if(typeof res === "string"
   && res === "buen"
   && res.length === 4)
    success("Test correct")
else 
    fail("Test failed")