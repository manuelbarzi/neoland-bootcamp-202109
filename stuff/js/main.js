console.log ( '> objects')

var o  = {} // new object, no primitvos y mutables
var p = {} // no es el mismo object. que o
var q = {}
console.log (o===p)
//o declaro una propiedad a para que sea igual a p
o.a = p
p.name = 'Peter'
console.log(o.a.name)

o.a.b= q
q.name = 'John'
console.log(o.a.b.name)

o.surname = 'Pan'
console.dir(o) // nos deja analizar 

console.dir(p)

var keys = Object.keys(o) //funcion constructura y un objeto
// la propiedad keys nos devuelve de cualquier objeto sus propiedades
console.dir (keys)

var o ={ name: 'Peter', surname: 'pan', age :16}
var keys = Object.keys(o)

for (var i=0; i< keys.length; i++){
var key = keys[i]
var value = o [key]
console.log (key, value)
}

var a = [1,2,3]
console.log (a[0])
console.log (a['0'])

o[0]=1
console.dir(o)
console.dir (o [0])
console.dir (o ['0'])

var key = 'name'
console.log(o[key])

var key = 'surname'
console.log(o[key])

console.log(o[key])

var o = {
    a: 1, b: 2, c: 3, 10:{
        d: function(){
            return{
                e:['hola mundo', true, 1, null, undefined {
                    f: function (){
                        return {
                            h:[0,1,2,{
                                hello:'world'
                            }]
                        }
                    }
                }
            }
        }
    }
}


console.log(o[10].d().e[5].f().h[3].hello)

for( var key in o)
    console.log(key, o[key])

var a = [1, 2, 3]
a.name= 'A'

for(var key in a)
    console.log(key, a[key])

var o = { 0: 1, 1: 2 ,2: 3, length: 3}
for(var key in o)
    console.log (key, 0[key])

function f(){
    for (var key in arguments)
    console.log(key, arguments[key])
}

f (1, 2, 3)

for(var key in o)
    console.log (key, 0[key])

function f(){
    for (var key in arguments)
    console.log(val)
}

f (1, 2, 3)
console.log('> higher order functions') 
// Una "función de orden superior" es una función que acepta funciones como parámetros y / o devuelve una función.

function g(){ 
    return function (){return 'hello world'} 
}
console.log(g()())

function h (callback){
    callback ()
}

h(function (){
    console.log('hola mundo')
})

function forEach (array, callback){
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        callback(element, i)
        
    }
}

var a = ['a', 'b', 'c']

forEach (a,function (val, index){
    console.log(index, val)
})

forEach (a,function (val, index){
    console.log(index, val.toUpperCase ()) // mayusculas
})

a.forEach(function (val, index){
    console.log(index, val)
})

a.forEach (function (val, index){
    console.log(index, val.toUpperCase ())
})

var a =[1,2,3]

forEach (a, function (val, index){
    console.log(index, val*10)
})

forEach (a, function (val, index ){
    console.log(index, val ** 2)
})
//el forEach es la funcion for (val i = 0 ; i<array.length ; i++)
forEach (a, function (val, index ){
    console.log(index, Math.sqrt(val)) // Math.sqrt raiz quadrada
})