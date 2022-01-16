describe('TEST reverse');

// CASE 1

let res = reverse([1, 2, 3, 4, 5]);

if (
    res instanceof Array
    && res.length === 5
    && res[0] === 5
    && res[1] === 4
    && res[2] === 3
    && res[3] === 2
    && res[4] === 1
    )
    success('test ok')
else
    fail('test failed')

// CASE 2

res = reverse(["a", "b", "c", "d", "e"]);

if (
    res instanceof Array
    && res.length === 5
    && res[0] === "e"
    && res[1] === "d"
    && res[2] === "c"
    && res[3] === "b"
    && res[4] === "a"
    )
    success('test ok')
else
    fail('test failed')

// CASE 2

res = reverse([true, false, true, true, false]);

if (
    res instanceof Array
    && res.length === 5
    && res[0] === false
    && res[1] === true
    && res[2] === true
    && res[3] === false
    && res[4] === true
    )
    success('test ok')
else
    fail('test failed')