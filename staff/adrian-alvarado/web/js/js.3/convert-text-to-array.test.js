describe('TEST convertTextToArray')

// CASE 1

var res = convertTextToArray('hola')

if (res instanceof Array 
    && res.length === 4 
    && res[0] === 'h' 
    && res[1] === 'o' 
    && res[2] === 'l' 
    && res[3] === 'a') {
    success('test ok')
} else {
    fail('test failed')
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
    success('test ok')
} else {
    fail('test failed')
}


// CASE 3

var res = convertTextToArray('perro')

if (res instanceof Array 
    && res.length === 5
    && res[0] === 'p' 
    && res[1] === 'e' 
    && res[2] === 'r' 
    && res[3] === 'r'
    && res[4] === 'o') {
    success('test ok')
} else {
    fail('test failed')
}


// CASE 2

var res = convertTextToArray('JS runs very bad')

if (res instanceof Array 
    && res.length === 16
    && res[0] === 'J' 
    && res[1] === 'S' 
    && res[2] === ' ' 
    && res[3] === 'r'
    && res[4] === 'u'
    && res[5] === 'n'
    && res[6] === 's'
    && res[7] === ' '
    && res[8] === 'v'
    && res[9] === 'e'
    && res[10] === 'r'
    && res[11] === 'y'
    && res[12] === ' '
    && res[13] === 'b'
    && res[14] === 'a'
    && res[15] === 'd') {
    success('test ok')
} else {
    fail('test failed')
}