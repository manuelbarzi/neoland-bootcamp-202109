// TODO
describe ("TEST concat")
//caso 0
var example1 = [1,2,3,4]
var example2 = ['a','b','c','d']
var res = concatArrays(example1, example2)
var array= res

if (res instanceof Array
    && res.length === array.length
    && res === array
    && res[0] === 1
    && res[1] === 2
    && res[2] === 3
    && res[3] === 4
    && res[4] === 'a'
    && res[5] === 'b'
    && res[6] === 'c'
    && res[7] === 'd')
    success('test ok')
else
    fail('test failed')

//caso 1

var example1 = [1,3,5,7]
var example2 = [2,4,6,8]
var res= concatArrays(example1, example2)
var array=res

if(res instanceof Array
    && res.length === array.length
    && res === array
    && res[0] === 1
    && res[1] === 3
    && res[2] === 5
    && res[3] === 7
    && res[4] === 2
    && res[5] === 4
    && res[6] === 6
    && res[7] === 8)
    success('test ok')
else
    fail('test failed') 

//caso 2

var example1 = ['Noelia', 'Ana', 'Carlos', 'Sergio']
var example2 = ['tienen', 'un', 'grup', 'juntos']
var res= concatArrays(example1, example2)
var array=res

if(res instanceof Array
    && res.length === array.length
    && res === array
    && res[0] === 'Noelia'
    && res[1] === 'Ana'
    && res[2] === 'Carlos'
    && res[3] === 'Sergio'
    && res[4] === 'tienen'
    && res[5] === 'un'
    && res[6] === 'grup'
    && res[7] === 'juntos')
    success('test ok')
else
    fail('test failed') 
