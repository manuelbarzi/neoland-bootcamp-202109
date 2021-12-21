describe('TEST includes');

// case1

var res = includes("Hello world!", "o");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')


// case2

var res = includes("Hello world!", "g");

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')


// case3

var res = includes("Hello world!", "ll");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')

// case4

var res = includes("Hello world!", "eo");

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')

// case5

var res = includes("Hello world!", 23);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')

// case6

var res = includes("Hello world!", "o", 9);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')

// case7

var res = includes("Hello world!", "l", 6);

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')

// case8

var res = includes("Hello world!", "ll", 1);

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')

// case9

var res = includes("Hello world!", "ll", 9);

if (
    typeof res === "boolean"
    && res === false
    )
    success('test ok')
else
    fail('test failed')

// case10

var res = includes("Hello world!");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')

// case9

var res = includes("Hello world!", "");

if (
    typeof res === "boolean"
    && res === true
    )
    success('test ok')
else
    fail('test failed')