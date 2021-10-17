describe('TEST forEach')


var array = ['a', 'b', 'c']
var res = []
var altern = function (element, index) {
    res[index] = element}

forEach(array, altern)

if (res.length === array.length
    && res[0] === array[0]
    && res[1] === array[1]
    && res[2] === array[2])
    success('test 1 ok')
else
    fail('test 1 failed')

//________________________________________________________________________


var array = [1, 2, 3]
var res = []

forEach(array, function (element, index) {
    res[index] = element * 10
})

if (res.length === array.length
    && res[0] === array[0] * 10
    && res[1] === array[1] * 10
    && res[2] === array[2] * 10)
    success('test 2 ok')
else
    fail('test 2 failed')


// ______________________________________________________________________________


var array = [2, 3, 4]
var res = []

forEach(array, function (element, index) {
    res[index] = element **3
})
if (res.length === array.length
    && res[0] === array[0] **3
    && res[1] === array[1] **3
    && res[2] === array[2] **3)
    success('test 3 ok')
else
    fail('test 3 fail')