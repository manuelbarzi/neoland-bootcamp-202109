function loopDePares (x) {
    for (i=0; i <= 100; i++){
        const sum = i + x
        if (sum%2 === 0) 
        console.log (`
            El resultado de ${x} + ${i} es igual a ${sum} que es par`
        )
    }
}

loopDePares(1)