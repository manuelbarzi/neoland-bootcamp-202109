describe('TEST randomNumbers');

// CASE 1

let res = randomNumbers(3, 50);

if (
    res instanceof Array
    && res.length === 3
    && (res[0] >= 0 && res[0] <= 50)
    )
    success('test ok')
else
    fail('test failed')

// CASE 2

res = randomNumbers(5, 20);

if (
    res instanceof Array
    && res.length === 5
    && (res[0] >= 0 && res[0] <= 20)
    )
    success('test ok')
else
    fail('test failed')

// Case 3

res = randomNumbers(20, 500);

if (
    res instanceof Array
    && res.length === 20
    && (res[0] >= 0 && res[0] <= 500)
    )
    success('test ok')
else
    fail('test failed')