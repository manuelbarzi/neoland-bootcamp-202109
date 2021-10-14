describe('TEST countVocals')

//CASE 1

var res = countVocals('hola')

if (res instanceof Object
    && res.a === 1
    && res.e === 0
    && res.i === 0
    && res.o === 1
    && res.u === 0)
    success('test ok')
else
    fail('test ok')

    //CASE 2

var res = countVocals('murcielago')

if (res instanceof Object
    && res.a === 1
    && res.e === 1
    && res.i === 1
    && res.o === 1
    && res.u === 1)
    success('test ok')
else
    fail('test ok')