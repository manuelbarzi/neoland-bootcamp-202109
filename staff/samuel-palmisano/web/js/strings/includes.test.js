describe('TEST includes');

// CASE 1

var res = includes("Hello world!", "o");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test 1 ok')
else
    fail('test 1 failed')


// CASE 2

var res = includes("Hello world!", "g");

if (
    typeof res === "boolean"
    && res === false
    )
    success('test 2 ok')
else
    fail('test 2 failed')


// CASE 3

var res = includes("Hello world!", "ll");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test 3 ok')
else
    fail('test 3 failed')

// CASE 4

var res = includes("Hello world!", "eo");

if (
    typeof res === "boolean"
    && res === false
    )
    success('test 4 ok')
else
    fail('test 4 failed')

// CASE 5

var res = includes("Hello world!", 23);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test 5 ok')
else
    fail('test 5 failed')

// CASE 6

var res = includes("Hello world!", "o", 9);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test 6 ok')
else
    fail('test 6 failed')

// CASE 7

var res = includes("Hello world!", "l", 6);

if (
    typeof res === "boolean"
    && res === true
    )
    success('test 7 ok')
else
    fail('test 7 failed')

// CASE 8

var res = includes("Hello world!", "ll", 1);

if (
    typeof res === "boolean"
    && res === true
    )
    success('test 8 ok')
else
    fail('test 8 failed')

// CASE 9

var res = includes("Hello world!", "ll", 9);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test 9 ok')
else
    fail('test  9failed')

// CASE 10

var res = includes("Hello world!");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test 10 ok')
else
    fail('test 10 failed')

// CASE 11

var res = includes("Hello world!", "");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test 11 ok')
else
    fail('test 11 failed')