var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var res = concat(arr1, arr2)

if (typeof res === Array
    && res.length === arr1.length + arr2.length
    && res === arr1 + arr2) 
    success('test ok')
else
    fail('test fail')