describe('TEST filter')

describe('Case 1')

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var items = []
function searchLetter(element, index) {
    items[index] = element
    return element.startsWith("e") 
}
var res = filter(words, searchLetter)

if(res instanceof Array
    && res.length === 2
    && res[0] == words[2]
    && res[1] == words[3])
    success("Test correct")
else
    fail("Test failed")

describe('Case 2')

var num = [1, 22, 3, 4, 5, 105]
var items = []
function higherThan4(element, index) {
    items[index] = element
    return element > 4
}
var res = filter(num, higherThan4)

if(res instanceof Array
    && res.length === 3
    && res[0] == num[1]
    && res[1] == num[4]
    && res[2] == num[5])
    success("Test correct")
else
    fail("Test failed")