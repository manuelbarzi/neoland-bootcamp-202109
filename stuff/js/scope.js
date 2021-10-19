console.log('>scope')

var a=2
function fi() {
    var a=1 // shadowing (le hace sombra a la variable declarada dentro de la funcion) la redefines fuera
    return a
}

console.log(f1())
//la variable a solo existe dentro {} que se llama scope que es el cuerpo de la funcion. si llamamos a f1 no nos retorna lo de dentro de la funcion, si hay una variable fuera de la funcion con el mismo nombre si que se asigna cuando la llamas

var b= 1
function f2() {
    b=2
    return b
}

console.log(f2())
console.log(b)
//en la consola machaca la variable de fuera, conviertiendo a las dos en 2, si no esta definida la variableen el scope lo busca fuera

//
var c=1
function f3(){
    var c= 2
    function f4(){
        var c
        return c
    }
    return f4() //return undefined
}
console.log(f3())//undefined

//
var c=1
function f3(){
    var c= 2
    function f4(){
        //var c
        return c
    }
    return f4() 
}
console.log(f3()) 
// retornara 2 

var d=1
function f3(){
    // var c= 2
    function f4(){
        //var c
        return d
    }
    return f4() 
}
console.log(f3()) // retornara 1