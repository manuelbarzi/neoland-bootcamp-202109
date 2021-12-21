describe ('TEST slice')

describe ('case1')

var string = 'The quick brown fox jumps over the lazy dog'
var res = slice (string, 31)

if (typeof res === 'string'
&& res === 'the lazy dog.')
success ('Test ok')
else
fail ('test failed')

describe ('case 2' )