describe('TEST startsWith')

describe('case 1')

var str = 'Hola Maricarmen tu hija...'
var stringBuscado = 'Hola'
var res = startsWith(str, stringBuscado)
if(typeof res === 'boolean' && res === true)
success('test ok')
else
fail('test failed')

describe('case 2')

var str = 'Hola Maricarmen tu hija...'
var stringBuscado = 'hola'
var res = startsWith(str, stringBuscado)
if(typeof res === 'boolean' && res === false)
success('test ok')
else
fail('test failed')

describe('case 3')

var str = 'Hola Maricarmen tu hija...'
var stringBuscado = 'Mar'
var res = startsWith(str, stringBuscado, 5)
if(typeof res === 'boolean' && res === true)
success('test ok')
else
fail('test failed')

describe('case 4')

var str = 'Hola Maricarmen tu hija...'
var stringBuscado = 'Mar'
var res = startsWith(str, stringBuscado)
if(typeof res === 'boolean' && res === false)
success('test ok')
else
fail('test failed')

describe('case 5')

var str = 'Hola Maricarmen tu hija...'
var stringBuscado = 'Mar'
var res = startsWith(str, stringBuscado, 4)
if(typeof res === 'boolean' && res === false)
success('test ok')
else
fail('test failed')
