console.log ('TEST convertTextToAray')

var res = convertTextToArray('hola')

if (res instanceof Array
    && res.lenght === 4 
    && res[0] === 'h' 
    && res[1] === 'o'
    && res[2] === 'l'
    && res[3] === 'a'){
    console.log('test ok')
}else {
    console.error('test failed')
}