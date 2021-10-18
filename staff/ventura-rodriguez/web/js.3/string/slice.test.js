describe('TEST slice');

// CASE 1

var res = slice("12345", 2);

if (
    typeof res === "string"
    && res.length === 3
    && res[0] === "3"
    && res[1] === "4"
    && res[2] === "5"
    )
    success('test ok')
else
    fail('test failed')


// CASE 2

var res = slice("12345", 1, 3);

if (
    typeof res === "string"
    && res.length === 2
    && res[0] === "2"
    && res[1] === "3"
    )
    success('test ok')
else
    fail('test failed')


// CASE 3

var res = slice("12345");

if (
    typeof res === "string"
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

// CASE 4

var res = slice("12345", -3);

if (
    typeof res === "string"
    && res.length === 3
    && res[0] === "3"
    && res[1] === "4"
    && res[2] === "5"
    )
    success('test ok')
else
    fail('test failed')

// CASE 5

var res = slice("12345", -4, -1);

if (
    typeof res === "string"
    && res.length === 3
    && res[0] === "2"
    && res[1] === "3"
    && res[2] === "4"
    )
    success('test ok')
else
    fail('test failed')

// CASE 6

var res = slice("12345", 10, -1);

if (
    typeof res === "string"
    && res.length === 0
    && res === ""
    )
    success('test ok')
else
    fail('test failed')

// CASE 7

var res = slice("12345", 0, 40);

if (
    typeof res === "string"
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

// CASE 8

var res = slice("12345", -10, 4);

if (
    typeof res === "string"
    && res.length === 4
    && res[0] === "1"
    && res[1] === "2"
    && res[2] === "3"
    && res[3] === "4"
    )
    success('test ok')
else
    fail('test failed')

// CASE 9

var res = slice("12345", 1, -20);

if (
    typeof res === "string"
    && res.length === 0
    && res === ""
    )
    success('test ok')
else
    fail('test failed')