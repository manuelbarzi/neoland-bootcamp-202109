console.log('TEST convertTextToArray')

// CASE 1 //

var res = convertTextToArray('hola')

if (res instanceof Array 
    && res.length === 4 
    && res[0] === 'h' 
    && res[1] === 'o' 
    && res[2] === 'l' 
    && res[3] === 'a') {
    console.log('Test correct')
} else {
    console.error('Test failed')
}

// CASE 2 //

var res = convertTextToArray("Hola Juan Carlos")

if (res instanceof Array
    && res.length === 16
    && res[0] === "H"
    && res[1] === "o"
    && res[2] === "l"
    && res[3] === "a"
    && res[4] === " "
    && res[5] === "J"
    && res[6] === "u"
    && res[7] === "a"
    && res[8] === "n"
    && res[9] === " "
    && res[10] === "C"
    && res[11] === "a"
    && res[12] === "r"
    && res[13] === "l"
    && res[14] === "o"
    && res[15] === "s") {
        console.log("Test correct")
    } else {
        console.error("Test failed")
    }

// CASE 3 //

var res = convertTextToArray("Neoland Bootcamp")

if (res instanceof Array
    && res.length == 16
    && res[0] === "N"
    && res[1] === "e"
    && res[2] === "o"
    && res[3] === "l"
    && res[4] === "a"
    && res[5] === "n"
    && res[6] === "d"
    && res[7] === " "
    && res[8] === "B"
    && res[9] === "o"
    && res[10] === "o"
    && res[11] === "t"
    && res[12] === "c"
    && res[13] === "a"
    && res[14] === "m"
    && res[15] === "p") {
        console.log("Test correct")
    } else {
        console.error("Test failed")
    }

// CASE 4 //

var res = convertTextToArray("Alvaro Cortes")

    if (Array.isArray(res)
       && res.length === 13
       && res[0] === "A"
       && res[1] === "l"
       && res[2] === "v"
       && res[3] === "a"
       && res[4] === "r"
       && res[5] === "o"
       && res[6] === " "
       && res[7] === "C"
       && res[8] === "o"
       && res[9] === "r"
       && res[10] === "t"
       && res[11] === "e"
       && res[12] === "s") {
           console.log("Test correct")
       } else {
           console.error("Test failed")
       }

// CASE 5 //

var res = convertTextToArray("chau")

    if (res.length === 4
        && res[0] === "c"
        && res[1] === "h"
        && res[2] === "a"
        && res[3] === "u") {
        console.log("Test correct")
    } else {
        console.error("Test failed")
    }