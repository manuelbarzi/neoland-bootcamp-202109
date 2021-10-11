// Los primos sexy son pares de dos primos que están
// separados por 6
function sexyPrimes(x, y) {
    let bool = true;
    if(
        ((x > 1 && y > 1)) &&
        (x - y === 6 || y - x === 6) &&
        (
            (x % 2 !== 0 || x === 2) ||
            (y % 2 !== 0 || y === 2)
        )
    ) {
        const vueltas = (x > y) ? x/2 : y/2;
        let i = 2;
        while(i < vueltas && bool) {
            if (x % i == 0 && y % i == 0) bool = false;
            i++
        }
    } else {
        bool = false;
    }
    return bool;
}