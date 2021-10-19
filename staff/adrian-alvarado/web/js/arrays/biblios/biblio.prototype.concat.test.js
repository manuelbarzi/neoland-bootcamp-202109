describe('TEST concat')

describe('case 1')

var a1 = new Biblio('a', 'b', 'c')
var a2 = new Biblio('d', 'e', 'f')

var res = a1.concat(a2)

if (res instanceof Biblio
    && res.length === a1.length + a2.length
    && res[0] === 'a'
    && res[1] === 'b'
    && res[2] === 'c'
    && res[3] === 'd'
    && res[4] === 'e'
    && res[5] === 'f'
    && a1.length === 3
    && a1[0] === 'a'
    && a1[1] === 'b'
    && a1[2] === 'c'
    && a2.length === 3
    && a2[0] === 'd'
    && a2[1] === 'e'
    && a2[2] === 'f')
    success('test ok')
else
    fail('test fail')



describe('case 2')

var a1 = new Biblio('a', 'b', 'c')
var a2 = new Biblio('d', 'e', 'f')
var a3 = new Biblio('g', 'h', 'i')

var res = a1.concat(a2, a3)

if (res instanceof Biblio
    && res.length === a1.length + a2.length + a3.length
    && res[0] === 'a'
    && res[1] === 'b'
    && res[2] === 'c'
    && res[3] === 'd'
    && res[4] === 'e'
    && res[5] === 'f'
    && res[6] === 'g'
    && res[7] === 'h'
    && res[8] === 'i'
    && a1.length === 3
    && a1[0] === 'a'
    && a1[1] === 'b'
    && a1[2] === 'c'
    && a2.length === 3
    && a2[0] === 'd'
    && a2[1] === 'e'
    && a2[2] === 'f'
    && a2.length === 3
    && a3[0] === 'g'
    && a3[1] === 'h'
    && a3[2] === 'i')
    success('test ok')
else
    fail('test fail')