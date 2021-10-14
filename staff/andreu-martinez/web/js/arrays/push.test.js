describe("Test push")

// CASE 1

var array = ['Coliflor','Remolacha']
var addItem = 'Zanahoria'
var res = push(array, addItem)

if (res instanceof Array
    && res.length === 3)
    success('test ok')
else
    fail('test failed')