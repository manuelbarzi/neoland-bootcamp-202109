describe('TEST convertTextToArray')

// CASE 1

var res = convertTextToArray('klaus luther')

if (res instanceof Array 
    && res.length === 2 
    && res[0] === 'klaus'
    && res[1] === 'luther') {
    console.log('test ok')
} else {
    console.error('test failed')
}

// CASE 2

var res = convertTextToArray('klaus')

if (res instanceof Array 
    && res.length === 5
    && res[0] === 'k' 
    && res[1] === 'l' 
    && res[2] === 'a' 
    && res[3] === 'u'
    && res[4] === 's') {
    console.log('test ok')
} else {
    console.error('test failed')
}