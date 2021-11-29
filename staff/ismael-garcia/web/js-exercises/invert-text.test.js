console.log('TEST invertText');

// CASE 1

var res = invertText('hola');

if (res instanceof String
    && res.length === 4
    && res[0] === 'a'
    && res[1] === 'l'
    && res[2] === 'o'
    && res[3] === 'h') {
    console.log('test ok');
} else {
    console.log('test failed!');
}

// CASE 2

var res = invertText('mundo');

if (res instanceof String 
    && res.length === 5
    && res[0] === 'o' 
    && res[1] === 'd' 
    && res[2] === 'n' 
    && res[3] === 'u'
    && res[4] === 'm') {
    console.log('test ok');
} else {
    console.error('test failed!');
}