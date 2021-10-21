var texto = 'Esta noche estamos de fiesta'

//CASE 1

var res = startsWith(texto, 'Esta')

if( typeof res === 'boolean'
    && res === true)
    success('test ok')
else
    fail('test failed')

//CASE 2

var res = startsWith(texto, 'noche')

if( typeof res === 'boolean'
    && res === false)
    success('test ok')
else
    fail('test failed')

//CASE 3

var res = startsWith(texto, 'esta', 11)

if( typeof res === 'boolean'
    && res === true)
    success('test ok')
else
    fail('test failed')