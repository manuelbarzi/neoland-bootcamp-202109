describe('TEST charAt')

let str = 'Brave new world'

let res = charAt(str, 0)

if (typeof res === 'string'
    && res === 'B')
        success('test ok')
else
    fail('test fail')