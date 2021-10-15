// function push(arr, element) {
//     arr[arr.length] = element

//     return arr.length
// }


function push(arr) {
    for (let i = 0; i < arguments.length; i++) {
        arr[arr.length] = element
    }

    return arr.length
}



let arr = ['pigs', 'goats', 'sheep']
let res = push(arr, 'cows')

if (typeof res == 'number'
    && res === 4
    && arr.length === 4
    && res[0] === 'pigs'
    && res[1] === 'goats'
    && res[2] === 'sheep'
    && res[3] === 'cows')
    console.log('test ok')
else
    console.error('test fail')