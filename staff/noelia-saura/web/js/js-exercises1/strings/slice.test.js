// TODO

describe('TEST slice')

// CASE 0

var string = 'hola Carlos'


var res = slice(string, 5)

if (res==='Carlos') 
    success('test ok')
else
    fail('test fail')

// CASE 1

var string = 'estoy bebiendo cocacola'

var res = slice(string, 6, -4)

if (res === 'bebiendo coca')
    success('test ok')
else
    fail('test fail')


// CASE 2

var string = 'me voy de paseo con mis perros al campo'

var res = slice(string, 10, -9 )

if ( res === 'paseo con mis perros' ) 
    success('test ok')
else
    fail('test fail')

