
//CASO 1

var array1 =[1,2,3,4]
var array2= [11,12,13,14]

var res = concat(array1,array2)

if(res instanceof Array
    && res.length === array1.length+array2.length
    && res[0]===array1[0]//1
    && res[1]===array1[1]//2
    && res[2]===array1[2]//3
    && res[3]===array1[3]//4
    && res[0]===array2[0]//11
    && res[1]===array2[1]//12
    && res[2]===array2[2]//13
    && res[3]===array2[3])//14
    success =("test ok")



 // CASO 2

 var array1 =[100,200,300,400]
var array2= [20,22,45]

var res = concat(array1,array2)

if(res instanceof Array
    && res.length === array1.length+array2.length
    && res[0]===array1[0]//100
    && res[1]===array1[1]//200
    && res[2]===array1[2]//300
    && res[3]===array1[3]//400
    && res[0]===array2[0]//20
    && res[1]===array2[1]//22
    && res[2]===array2[2])//45
    success =("test ok")

//CASO 3

var array1 =[52,84,39]
var array2= [20,22,45]
var array3= [47,69]

var res = concat(array1,array2,array3)

if(res instanceof Array
    && res.length === array1.length+array2.length
    && res[0]===array1[0]//52
    && res[1]===array1[1]//84
    && res[2]===array1[2]//39
    && res[0]===array2[3]//20
    && res[1]===array2[1]//22
    && res[2]===array2[2]//45
    && res[0]===array3[0]//47
    && res[1]===array3[1])//69
    success =("test ok")
