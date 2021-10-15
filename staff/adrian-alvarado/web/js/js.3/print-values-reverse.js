let values = [1,2,3,4,5]

function printValuesReverse(arr) {
    for (let i = 0; i < arr.length; i++) {
        
        let arrValue = arr[arr.length - 1 - i]
        
        console.log(arrValue);
    }
}