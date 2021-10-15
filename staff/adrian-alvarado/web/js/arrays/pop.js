function pop(arr) {
    let last = arr[arr.length - 1]

    arr.length--

    return last
}




describe('Test pop')

// CASE 1

let res = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

res = pop(arr)

if (typeof res === 'string' 
    && Array.length === 4
    && res === 'tomato'
    && arr[0] === 'brocoli'
    && arr[1] === 'cauliflower'
    && arr[2] === 'cabbage'
    && arr[3] === 'kale')
    success('test ok')
else
    fail('test fail')