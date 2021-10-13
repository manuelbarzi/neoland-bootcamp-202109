describe('TEST index of')


// case 1 
var res=indexof('hola mundo', 'a')

if (typeof res === 'number'
&& res === 3)
    success('Test ok')
else 
    fail('test failed')