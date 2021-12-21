describe ('TEST lastIndexOf')

describe ('case1')

var array = [0,1,3,5,5,7,5,3]
var res = lastIndexof(array,5,6)

if(typeof res === "number"
&& res === 6)
success ('test ok')
else fail ('test fail')

describe ('TEST lastIndexOf')

describe ('case2')

var array = [0,1,3,5,5,7,5,3]
var res = lastIndexof(array,5)

if(typeof res === "number"
&& res === 6)
success ('test ok')
else fail ('test fail')

describe ('case3')

var array = [0,1,3,5,5,7,5,3]
var res = lastIndexof(array,10, -1)

if(typeof res === "number"
&& res === -1)
success ('test ok')
else fail ('test fail')

describe ('case4')

var array = [0,1,3,5,5,7,5,3]
var res = lastIndexof(array,3, -2)

if(typeof res === "number"
&& res === 2)
success ('test ok')
else fail ('test fail')






// //var numbers = [2, 5, 9, 2];
// numbers.lastIndexOf(2);     // 3
// numbers.lastIndexOf(7);     // -1
// numbers.lastIndexOf(2, 3);  // 3
// numbers.lastIndexOf(2, 2);  // 0
// numbers.lastIndexOf(2, -2); // 0
// numbers.lastIndexOf(2, -1); // 3