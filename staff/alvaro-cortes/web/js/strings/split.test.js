describe("TEST split")

// CASE 1 //

var res = split("hola", "")

if (typeof res === "string"
    && res.length === 4
    && res[0] === 'h'
    && res[1] === 'o'
    && res[2] === 'l'
    && res[3] === 'a')
    success('test ok')
else
    fail('test failed')

// CASE 2 //

var res = split("hola", "ol")

if (typeof res === "string"
    && res.length === 2
    && res[0] === 'h'
    && res[1] === 'a')
    success('test ok')
else
    fail('test failed')