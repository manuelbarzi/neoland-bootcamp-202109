function lastIndexof(array, value, index) {
var finalIndex = ''


    if (index < 0) {
        for (let i = array.length + index; i >= 0; i--) {
            if (array[i] === value) {
                finalIndex = i 
            }
            
        }

    } else {
        for (let i = index ? index : 0; i < array.length; i++) {
            if (array[i] === value) {
                finalIndex = i
            }
        }
    }
    
    if (finalIndex !== '') return finalIndex
    else return - 1

}

// function lastIndexof(array, value, index) {

    
    
//         if (index < 0) {
//             for (let i = array.length + index; i >= 0; i--) {
//                 if (array[i] === value) {
//                     return i
//                 }
                
//             }
    
//         } else {
//             for (let i = index ? index : 0; i < array.length; i++) {
//                 if (array[i] === value) {
//                     return i
//                 }
//             }
//         }
        
//         return - 1
    
//     }
