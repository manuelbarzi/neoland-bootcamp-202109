console.log('TEST calcPopulation');

// CASE 1

let res = calcPopulation(2, 80, 50, 5, 1000)

if (
    typeof res === "number"
    && res === 1260
)
    console.log('test ok')
else
    console.log('test failed')

// CASE 2

res = calcPopulation(3, 40, 90, 8, 3030)

if (
    typeof res === "number"
    && res === 3394
)
    console.log('test ok')
else
    console.log('test failed')

// CASE 3

res = calcPopulation(3, 3, 23, 34, 430)

if (
    typeof res === "number"
    && res === 20
)
    console.log('test ok')
else
    console.log('test failed')