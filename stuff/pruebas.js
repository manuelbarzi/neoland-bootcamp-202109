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



