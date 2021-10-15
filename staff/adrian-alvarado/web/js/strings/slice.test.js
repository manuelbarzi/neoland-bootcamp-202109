describe('TEST slice')

let str = 'The quick brown fox jumps over the lazy dog.'

describe('Case 1')

let res = slice(str, 31)

if (typeof res === 'String'
    && res === 'the lazy dog.')
        success('test ok')
else
    fail('test fail')



describe('Case 2')

res = slice(str, 4, 19)

    if (typeof res === 'String'
        && res === 'quick brown fox')
            success('test ok')
    else
        fail('test fail')


describe('Case 3')

res = slice(str, -4)

    if (typeof res === 'String'
        && res === 'dog')
            success('test ok')
    else
        fail('test fail')



describe('Case 4')

res = slice(str, -9, -5)

    if (typeof res === 'String'
        && res === 'lazy')
            success('test ok')
    else
        fail('test fail')