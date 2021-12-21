function reverse(array){
//     var reverseArray = []

//     for (var i = array.length-1; i >= 0; i--) {
//         reverseArray.push(array[i])
        
//     }

//     return reverseArray
// }

for (let i = 0; i < array.length /2; i++) {
    var temp=array[i]

    array[i]= array [array.length -1 -i]
    array[array.length-1-i] = temp
    
}
return array
}