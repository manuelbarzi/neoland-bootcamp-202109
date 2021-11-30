//funcion con dos parametros n y k que se llama vector
//me devuelve un vector(array)de longitud n con numeros aleatorios entre 0 y k(es el rango de numeros)

function vector (n,k){
    let array=[]
    
    for (let i = 0; i < n; i++) { //guardar en cada posicion de la array, el numero de veces (n)
        array[i]=Math.floor(Math.random() * (k+1))
    }
    return array
}

// let v = vector(5,2)

// console.log(v)

module.exports = vector