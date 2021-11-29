// Implementar los tests que consideres necesarios
describe('TEST createRandomNum')

// CASE 1

var res = createRandomNum(4, 7)

if (res instanceof Array
    && res.length === 4
    && (res[0] >= 0 && res[0] <= 7)
    && (res[1] >= 0 && res[1] <= 7)
    && (res[2] >= 0 && res[2] <= 7)
    && (res[3] >= 0 && res[3] <= 7))
    success('test ok')
else
    fail('test failed')

// CASE 2

var res = createRandomNum(7, 4)

if (res instanceof Array
    && res.length === 7
    && (res[0] >= 0 && res[0] <= 4)
    && (res[1] >= 0 && res[1] <= 4)
    && (res[2] >= 0 && res[2] <= 4)
    && (res[3] >= 0 && res[3] <= 4)
    && (res[4] >= 0 && res[4] <= 4)
    && (res[5] >= 0 && res[5] <= 4)
    && (res[6] >= 0 && res[6] <= 4))
    success('test ok')
else
    fail('test failed')

// CASE 3

var res = createRandomNum(3, 6)

if (res instanceof Array
    && res.length === 3
    && (res[0] >= 0 && res[0] <= 6)
    && (res[1] >= 0 && res[1] <= 6)
    && (res[2] >= 0 && res[2] <= 6))
    success('test ok')
else
    fail('test failed')