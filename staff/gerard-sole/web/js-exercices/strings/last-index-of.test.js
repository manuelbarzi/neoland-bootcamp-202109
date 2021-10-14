describe('TEST last index of')

describe('case 1')

var str = "Brave new world"
var char = 'w'
var res = lastIndexOf(str, char)

if ( typeof res === 'number'&& res === 10)
success('test ok')
else 
fail('test failed')


describe('case 2')

var str = "Brave new world"
var char = 'w'
var res = lastIndexOf(str, char, 9)

if ( typeof res === 'number'&& res === 8)
success('test ok')
else 
fail('test failed')

describe('case 3')

var str = "Brave new world"
var char = 'new'
var res = lastIndexOf(str, char)

if ( typeof res === 'number'&& res === 6)
success('test ok')
else 
fail('test failed')


describe('case 4')

var str = "Brave new world"
var char = 'enew'
var res = lastIndexOf(str, char)

if ( typeof res === 'number'&& res === -1)
success('test ok')
else 
fail('test failed')

describe('case 5')

var str = "Brave new world"
var char = 'new'
var res = lastIndexOf(str, char, 7)

if ( typeof res === 'number'&& res === -1)
success('test ok')
else 
fail('test failed')