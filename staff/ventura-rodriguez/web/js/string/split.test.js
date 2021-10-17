describe('TEST split');

// CASE 1

var res = split("hola mundo", " ");

if (
    res instanceof Array
    && res.length === 2
    && res[0] === "hola"
    && res[1] === "mundo"
    )
    success('test ok')
else
    fail('test failed')


// CASE 2

var res = split("1 2 3 4 5", " ");

if (
    res instanceof Array
    && res.length === 5
    && res[0] === "1"
    && res[1] === "2"
    && res[2] === "3"
    && res[3] === "4"
    && res[4] === "5"
    )
    success('test ok')
else
    fail('test failed')


// CASE 3

var res = split("abcde", "");

if (
    res instanceof Array
    && res.length === 5
    && res[0] === "a"
    && res[1] === "b"
    && res[2] === "c"
    && res[3] === "d"
    && res[4] === "e"
    )
    success('test ok')
else
    fail('test failed')


// CASE 4

var res = split("Adiós mundo cruel");

if (
    res instanceof Array
    && res.length === 1
    && res[0] === "Adiós mundo cruel"
    )
    success('test ok')
else
    fail('test failed')


// CASE 5

var res = split("Hello", "ll");

if (
    res instanceof Array
    && res.length === 2
    && res[0] === "He"
    && res[1] === "o"
    )
    success('test ok')
else
    fail('test failed')


// CASE 6

var res = split("World", "ld");

if (
    res instanceof Array
    && res.length === 1
    && res[0] === "Wor"
    )
    success('test ok')
else
    fail('test failed')


// CASE 7

var res = split("World       ", " ");

if (
    res instanceof Array
    && res.length === 1
    && res[0] === "World"
    )
    success('test ok')
else
    fail('test failed')


// CASE 8

var res = split("Step by step", " by ");

if (
    res instanceof Array
    && res.length === 2
    && res[0] === "Step"
    && res[1] === "step"
    )
    success('test ok')
else
    fail('test failed')