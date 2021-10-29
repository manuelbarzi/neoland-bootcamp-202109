console.log("TEST SEXY-PRIMES.JS")

// CASE 1 //

var res = sexyPrimes(12, 6)

if (typeof res == 'boolean') {
    console.log("Test correct")
} else {
    console.error("Test failed")
}

// CASE 2 //

var res = sexyPrimes(12, 18)

if (typeof res == 'boolean') {
    console.log("Test correct")
} else {
    console.error("Test failed")
}

// CASE 3 //

var res = sexyPrimes(36, 30)

if (typeof res == 'boolean') {
    console.log("Test correct")
} else {
    console.error("Test failed")
}
