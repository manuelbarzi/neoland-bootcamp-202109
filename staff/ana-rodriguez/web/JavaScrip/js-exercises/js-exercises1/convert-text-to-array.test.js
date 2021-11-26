console.log('TEST convertTextToArray')

// CASE 1

var res = convertTextToArray('hola')

if (res instanceof Array 
    && res.length === 4 
    && res[0] === 'h' 
    && res[1] === 'o' 
    && res[2] === 'l' 
    && res[3] === 'a') {
    console.log('test ok')
} else {
    console.error('test failed')
}

// CASE 2

var res = convertTextToArray('mundo')

if (res instanceof Array 
    && res.length === 5
    && res[0] === 'm' 
    && res[1] === 'u' 
    && res[2] === 'n' 
    && res[3] === 'd'
    && res[4] === 'o') {
    console.log('test ok')
} else {
    console.error('test failed')
}

// CASE 3

var res = convertTextToArray('chunguisima')

if (res instanceof Array 
    && res.length === 11
    && res[0] === 'c' 
    && res[1] === 'h' 
    && res[2] === 'u' 
    && res[3] === 'n'
    && res[4] === 'g'    
    && res[5] === 'u' 
    && res[6] === 'i' 
    && res[7] === 's'
    && res[8] === 'i'
    && res[9] === 'm'
    && res[10] ==='a'
    )

     {
    console.log('test ok')
} else {
    console.error('test failed')
}