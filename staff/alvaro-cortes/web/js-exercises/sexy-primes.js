function sexyPrimes(a, b) {
    var bool = true

    if(
        (a - b !== 6 || b - a !== 6) || 
        (a <= 1 || b <= 1) ||
        (a % 2 === 0 && b % 2 === 0)
    ) 
        bool = false
    
    var z = 0;

    if(a > b) {
        z = a 
    } else {
        z = b
    }

    for(let i = 2; i < (z / 2); i++) {
        if((a % i === 0 && a % i !== 0) || (b % i === 0 && b % i !== 0)) bool = false
    }

    return bool
}