describe('TEST repeat')

describe('case 1')

var str = 'abc'
var res = repeat(str, 2)

if (typeof res === 'string' && res === 'abcabc')
success('test ok')
else 
fail('test error')


describe('case 2')

var str = 'abc'
var res = repeat(str, -1)

if (typeof res === 'string' && res === 'range error')
success('test ok')
else 
fail('test error')


describe('case 3')

var str = 'abc'
var res = repeat(str, 1)

if (typeof res === 'string' && res === 'abc')
success('test ok')
else 
fail('test error')

describe('case 4')

var str = 'abc'
var res = repeat(str, 0)

if (typeof res === 'string' && res === '')
success('test ok')
else 
fail('test error')

describe('case 5')

var str = 'abc'
var res = repeat(str, 3.5)

if (typeof res === 'string' && res === 'abcabcabc')
success('test ok')
else 
fail('test error')

describe('case 6')

var str = 'abc'
var res = repeat(str, 1/0)

if (typeof res === 'string' && res === 'range error')
success('test ok')
else 
fail('test error')