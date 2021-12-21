// TODO

describe ('TEST starts-with')

//Caso 1
var string='Esta noche tengo sueño'
var res= startWith(string,'Esta', 0)

if (typeof res === 'boolean'
    &&res===true) 
    success('test ok')
else
    fail('test fail')

//caso 2
var string='No empieza por la palabra del string'
var res= startWith(string,'empieza', 3)
if (typeof res=== 'boolean'
    &&res===true) 
    success('test ok')
else
    fail('test fail')

//case 3

var string = 'Saturday night plans'
var res =  startWith (string, 'Sat', 0 )

if (typeof res=== 'boolean'
    &&res===true) 
    success('test ok')
else
    fail('test fail')

//case 4
var string = '1,2,3,4,5,6'
var res = startWith (string, '4', 6 )

if (typeof res=== 'boolean'
    &&res===true) 
    success('test ok')
else
    fail('test fail')