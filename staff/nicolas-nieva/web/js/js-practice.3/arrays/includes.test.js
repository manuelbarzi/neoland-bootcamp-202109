describe('TEST (array) include')

// case1
describe('case1')

var array = ['naranja', 'uva', 'fresa', 'mango', 'kiwi'];

var res = include(array, 'fresa')

// true y 'true' no es la misma cosa, true es de tipo boolean y 'true' es de tipo string

// case1

if (typeof res === "boolean"
    && res === true)      //el resultado debe de ser true por que si hay un string fresa

    success('test ok')
else
    fail('test failed')

//case2

var array = ['Mariana y Noelia están platicando con Ventu', 'Mariana', 'y', 'Noelia', 'están', 'platicando', 'con', 'Ventu'];

var res = include(array, 'Mariana y Noelia están platicando con Ventu')

if (typeof res === "boolean"
    && res === true)

    success('text ok')
else
    fail('test failed')

// case3

// 1 y '1' no es la misma cosa, 1 es de tipo number y '1' es de tipo string

var array = [1, 2, 3, 4]

var res = include(array, 8)

if (typeof res === "boolean"
    && res === false)

    success('text ok')
else
    fail('test failed')