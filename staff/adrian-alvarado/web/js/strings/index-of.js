let phrase = 'Hola Adrian'

// indexOf(string) : devuelve la posición en la que se encuentra el string, si no lo encuenta devuelve -1

// function indexOf(str, value) {
//     let index = -1
    
//     for(let i = 0; i < str.length && index === -1 ; i++) {
//         let char = str[i]

//         if (char === value)
//             return i
//     }

//     return index
// }


// function indexOf(str, value, fromIndex) {
//     let j = 0
    
//     for(let i = 0; i < str.length; i++) {
//         let char = str[i]

//         if (char === value[j]) {
//             j++

//             if (j === value.length)
//                 return i - j + 1
//         } else
//             j = 0

//     }

//     return -1
// }


function indexOf(str, value, fromIndex) {
    let j = 0
    
    for(let i = fromIndex? fromIndex : 0; i < str.length; i++) {
        let char = str[i]

        if (char === value[j]) {
            j++

            if (j === value.length)
                return i - j + 1
        } else
            j = 0

    }

    return -1
}