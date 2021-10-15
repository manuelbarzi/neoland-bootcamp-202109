describe('TEST cahrAt');

// CASE 1

var res = cahrAt("12345", 2);

if (
    typeof res === "string"
    && res === "3"
    )
    success('test ok')
else
    fail('test failed')


// CASE 2

var res = cahrAt("12345", 3);

if (
    typeof res === "string"
    && res === "4"
    )
    success('test ok')
else
    fail('test failed')


// CASE 3

var res = cahrAt("12345");

if (
    typeof res === "string"
    && res === ""
    )
    success('test ok')
else
    fail('test failed')


// CASE 4

var res = cahrAt("12345", -2);

if (
    typeof res === "string"
    && res === ""
    )
    success('test ok')
else
    fail('test failed')