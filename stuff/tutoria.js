// funcion que tenga 2 parametros n y k, y se llama vector, que esa funcion devuelva un vector, un array de longitud n,
// con numeros aleatorios entre 0 y k

// comprobar el tipo y el resultado, de longitud n

function vector (n, k) { //n = 5 k = 7
    let arr = []
    
    
    for (let i = 0; i < n; i++){
        const random = Math.round(Math.random(k) * k)    
        arr.push(random)
    }
        
    return  arr  
}
//nico

console.log (vector (8,7))