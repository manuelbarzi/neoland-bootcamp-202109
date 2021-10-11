// TODO
describe ('TEST index-of')
//case 0
var array = [1,2,3,4]
var element = 2
var res=index(array, element)
if (res  === 1)
    success('test ok')
else
    fail('test failed')

//Case 1
var array = ['Noelia', 'Ana', 'Carlos', 'Sergio']
var element = 'Ana'
var res = index (array, element)
if (res === 1)
    success('test ok')
else
    fail('test failed')

//case 2

var array = ['a','b','c','d']
var element = 'd'
var res = index (array, element)
if (res === 3)
    success('test ok')
else
    fail('test failed')