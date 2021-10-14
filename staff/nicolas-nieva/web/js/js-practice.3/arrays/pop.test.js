describe('TEST Pop')

describe('CASE 1')

var array = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

var res = pop(array)

if (typeof res === 'string'
    && array.length === 4
    && res === 'tomato'
    && array[0] === 'broccoli'
    && array[1] === 'cauliflower'
    && array[2] === 'cabbage'
    && array[3] === 'kale')
    success('test ok')
else 
fail('test fail')

describe('CASE 2')

var array = [];

var res = pop(array)

if (typeof res === 'undefined'
    && array.length === 0)
    success('test ok')
else 
fail('test fail')

describe('CASE 3')

var object = {name: 'Peter'}
var func = function (){}
var arr = ['1','2','3'];
var array = [null, undefined, true, 1, func, arr, NaN, Infinity, Math.PI, object];
var res = pop(array)

console.log(array[8] === Math.pi)
if (typeof res === 'object'
    && array.length === 9
    && res === object
    && array[0] === null
    && array[1] === undefined
    && array[2] === true
    && array[3] === 1
    && array[4] === func
    && array[5] === arr
    && Number.isNaN(array[6])
    && array[7] === Infinity
    && array[8] === Math.pi)
    success('test ok')
else 
fail('test fail')