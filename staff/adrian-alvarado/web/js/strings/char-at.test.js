describe('TEST charAt')

describe('case 1')

var str = 'Brave new world'

var res = charAt(str, 0)

if (typeof res === 'string'
    && res === 'B')
    success('test ok')
else
    fail('test fail')



describe('case 2')

var str = 'Hello Friends'

var res = charAt(str, 6)

if (typeof res === 'string'
    && res === 'F')
    success('test ok')
else
    fail('test fail')



describe('case 3')

var str = 'Hey Guys'

var res = charAt(str, 3)

if (typeof res === 'string'
    && res === ' ')
    success('test ok')
else
    fail('test fail')