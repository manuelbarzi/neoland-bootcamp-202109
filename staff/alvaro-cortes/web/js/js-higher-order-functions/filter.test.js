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
    && res[1] == words[3]
    && words.length === 6
    && words[0] === "spray"
    && words[1] === "limit"
    && words[2] === "elite"
    && words[3] === "exuberant"
    && words[4] === "destruction"
    && words[5] === "present")
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
    && res[2] == num[5]
    && num.length === 6
    && num[0] === 1
    && num[1] === 22
    && num[2] === 3
    && num[3] === 4
    && num[4] === 5
    && num[5] === 105)
    success("Test correct")
else
    fail("Test failed")