const getSum = function(a,b) {
    return a + b
}

console.log (getSum(3,4))

const palabras = (a,b) => {
    console.log ((`${a} ${b}`))
}
palabras ('hola', 'mundo')

// devolver un array con 10 numeros aleatorios

// const vector = () =>{
//     const arr = []
//     for (let i=0; i<10;i++){
//      const random = Math.random()
//      arr.push(random)
//     }
//  return arr
// }

// console.log (vector())



// que 3 cosas espera un for, inicializacion de la variable, condicion de parada, 
// que hacer despues de cada iteracion


//debe devolver un array con longitud pasada por parametros por el usuario y de
//numeros random naturales entre 0 y el parametro pasado por el usuario
const vector = (a,b) =>{
    const arr = []
    for (let i=0; i<a;i++){
     const random = Math.round(Math.random() * b)
     arr.push(random)
    }
 return arr
}

console.log (vector(10, 5))
console.log (vector(5, 40))
console.log (vector(20, 400)) //primer parametro longitud array, segundo maximo valor nro natural


// -	1. Loop de pares
// Debés crear una función llamada loopDePares que reciba como parámetro un número y
// haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
// En caso de que el número de la iteración, sumado con el número pasado por parámetro, 
//sea par, mostrá en la consola “El número x es par”.

