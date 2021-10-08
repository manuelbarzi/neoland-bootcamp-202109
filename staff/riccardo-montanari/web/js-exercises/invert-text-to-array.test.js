var res = convertTextToArray('hola')

if (res instanceof String 
    && res.length === 4 
    && res[0] === 'a' 
    && res[1] === 'l' 
    && res[2] === 'o' 
    && res[3] === 'h') {
    console.log('test ok')
} else {
    console.error('test failed')
}