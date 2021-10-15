var soldProducts = [
    { name: 'banana', quantity: 10 },
    { name: 'apple', quantity: 112 },
    { name: 'kiwi', quantity: 301 },
    { name: 'orange', quantity: 30 },
    { name: 'melon', quantity: 301 }
]


function getMostSoldProducts(arr) {
    var mostSoldProducts = []
    valueReturn = arr[0].quantity

    for ( let i = 0; i < arr.length; i++ ) {

        if ( valueReturn < arr[i].quantity ) {
            valueReturn = arr[i].quantity
            // Ya conseguimos el valor máximo de quantity
            // lo que tengo que hacer es que el indice de value return se guarde en mostSoldProducts
        }

        
    }

    return mostSoldProducts
}

console.log('getMostSoldProducts')

var res = getMostSoldProducts(soldProducts)


if (res instanceof Array
    && res.length === 2
    && res[0] === 'kiwi'
    && res[1] === 'melon')
    console.log('test ok')
else
    console.error('test failed')