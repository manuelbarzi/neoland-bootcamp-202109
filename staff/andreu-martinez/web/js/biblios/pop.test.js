describe("Test Pop")

// CASE 1

var array = ['Coliflor', 'Pepino', 'Tomate', 'Lechuga', 'Zanahoria', 'Judias']
var res = pop(array)

if (res instanceof Array
    && array.length === 6
    && res.length === 5
    && array[4] === 'Zanahoria')
    success('test ok')
else
    fail('test failed')
