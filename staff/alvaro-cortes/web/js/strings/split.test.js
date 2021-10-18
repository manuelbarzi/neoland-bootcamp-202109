describe("TEST split")

// CASE 1 //

var res = split("hola", "")

if (typeof res === "string"
    && res.length === 4
    && res[0] === 'h'
    && res[1] === 'o'
    && res[2] === 'l'
    && res[3] === 'a')
    success('Test correct')
else
    fail('Test failed')

// CASE 2 //

res = split("hola", "ol")

if (typeof res === "string"
    && res.length === 2
    && res[0] === 'h'
    && res[1] === 'a')
    success('Test correct')
else
    fail('Test failed')

// CASE 3 //

res = split("hola mundo", " ");

if (
    res instanceof Array
    && res.length === 2
    && res[0] === "hola"
    && res[1] === "mundo"
    )
    success('Test correct')
else
    fail('Test failed')


// CASE 4 //

res = split("1 2 3 4 5", " ");

if (
    res instanceof Array
    && res.length === 5
    && res[0] === "1"
    && res[1] === "2"
    && res[2] === "3"
    && res[3] === "4"
    && res[4] === "5"
    )
    success('Test correct')
else
    fail('Test failed')


// CASE 5 //

res = split("abcde", "");

if (
    res instanceof Array
    && res.length === 5
    && res[0] === "a"
    && res[1] === "b"
    && res[2] === "c"
    && res[3] === "d"
    && res[4] === "e"
    )
    success('Test correct')
else
    fail('Test failed')


// CASE 6 //

res = split("Adiós mundo cruel");

if (
    res instanceof Array
    && res.length === 1
    && res[0] === "Adiós mundo cruel"
    )
    success('Test correct')
else
    fail('Test failed')


// CASE 7 //

res = split("Hello", "ll");

if (
    res instanceof Array
    && res.length === 2
    && res[0] === "He"
    && res[1] === "o"
    )
    success('Test correct')
else
    fail('Test failed')


// CASE 8 //

res = split("World", "ld");

if (
    res instanceof Array
    && res.length === 1
    && res[0] === "Wor"
    )
    success('Test correct')
else
    fail('Test failed')


// CASE 9 //

res = split("World       ", " ");
console.log(res);
if (
    res instanceof Array
    && res.length === 1
    && res[0] === "World"
    )
    success('Test correct')
else
    fail('Test failed')


// CASE 10 //

res = split("Step by step", " by ");

if (
    res instanceof Array
    && res.length === 2
    && res[0] === "Step"
    && res[1] === "step"
    )
    success('Test correct')
else
    fail('Test failed')

