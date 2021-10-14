// TODO

describe ('TEST starts-with')

//Caso 1
var empezar='Esta noche tengo sueño'
var comprobar= 'Esta'
var res= startWith(empezar,comprobar)

if (res===true) 
    success('test ok')
else
    fail('test fail')

//caso 2
var empezar='No empieza por la palabra del string'
var comprobar= ('empieza', 3)

if (res===true) 
    success('test ok')
else
    fail('test fail')