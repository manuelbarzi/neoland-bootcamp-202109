describe ('Test Char-At')

describe ('Case 1')

var string = 'hello';
var res = charAt(string, 4)

if (typeof res === 'string'
    && res === 'o')
    success ('test ok')
    else
    fail('test fail')

describe ('Case 2')

var string = 'hello luis';
var res = charAt(string, 6)

if (typeof res === 'string'
    && res === 'l')
    success ('test ok')
    else
    fail('test fail')

    describe ('Case 3')

var string = 'hello luis';
var res = charAt(string, 30)

if (typeof res === 'string'
    && res === '')
    success ('test ok')
    else
    fail('test fail')



