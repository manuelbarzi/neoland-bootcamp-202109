describe('TEST concat')

// HINT pay attention to the keyword "arguments" (Seach in Google)

// CASE 1

var arr1 = new Biblio(1, 2, 3, 4);
var arr2 = [5, 6, 7, 8]
var res = arr1.concat(arr2)


if (
    res instanceof Biblio
    && res.length === 8
    && res[0] === arr1[0]
    && res[1] === arr1[1]
    && res[2] === arr1[2]
    && res[3] === arr1[3]
    && res[4] === arr2[0]
    && res[5] === arr2[1]
    && res[6] === arr2[2]
    && res[7] === arr2[3]
)
    success('test ok')
else
    fail('test fail')


// CASE 2

var arr1 = new Biblio("1", "2", "3", "4");
var arr2 = ["5", "6", "7", "8"];  // lo que esta pasando es que [i] es arr2 y [j] es la posicion dentro del arr2 :var argu = arguments[i] this[this.length] =argu[j] 
var arr3 = ["9", "10", "11", "12"];

var res = arr1.concat(arr2, arr3)

if (
    res instanceof Biblio
    && res.length === 12
    && res[0] === arr1[0]
    && res[1] === arr1[1]
    && res[2] === arr1[2]
    && res[3] === arr1[3]
    && res[4] === arr2[0]
    && res[5] === arr2[1]
    && res[6] === arr2[2]
    && res[7] === arr2[3]
    && res[8] === arr3[0]
    && res[9] === arr3[1]
    && res[10] === arr3[2]
    && res[11] === arr3[3]
)
    success('test ok')
else
    fail('test fail')


// CASE 3

var arr1 = new Biblio (true, false, true);

var res = arr1.concat()

if (
    res instanceof Biblio
    && res.length === arr1.length
    && res[0] === arr1[0]
    && res[1] === arr1[1]
    && res[2] === arr1[2]
)
    success('test ok')
else
    fail('test fail')