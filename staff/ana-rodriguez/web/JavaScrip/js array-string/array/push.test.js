
var array = ['dog','cat','horse','agaporni'];

// CASO 1
var string = 'pig';
var res = push(array,string);
if(res instanceof Array
    && res.length=== array.length+1
    && res[0]===array[0]//dog
    && res[1]===array[1]//cat
    && res[2]===array[2]//horse
    && res[3]===array[3]//agaporni
    && res[4]===string)//pig
    console.log('test ok')
else
    console.log('test fail')

//CASO 2
var array2 = ['cow','duck'];
var res = push(array,array2);
if(res instanceof Array
    && res.length=== array.length+array2.length
    && res[0]===array[0]//dog
    && res[1]===array[1]//cat
    && res[2]===array[2]//horse
    && res[3]===array[3]//agaporni
    && res[4]===array2[0]//cow
    && res[5]===array2[1])//duck
    console.log('test ok')
else
    console.log('test fail')