// ------------------------- Como lo hizo Manu -------------------------------------
// var createTag = function(tag, content) {
//     return '<' + tag + '>' + content + '</' + tag + '>'
// }

// var createList = function(values) {
//     var list = '<ul>'

//     for (var i = 0; i < values.length; i++) {
//         var value = values[i]

//         list = list + createTag('li', value)
//     }

//     list = list + '</ul>'

//     return list
// }

// var students = ['Sergio', 'Nico', 'Adrian', 'Gerard', 'Riccardo', 'Xavier', 'Noelia']

// var list = createList(students)

// document.write(list)




// --------------------------------------------------------------------------------------------------------------------------------------------------
// Como lo quise hacer, pero no pude, intenta solucionarlo despues.
// Intente hacer dos funciones que creen las etiquetas li y ul y despues recorrer con for el array y despues mostrarlo en el documento, pero no pude.
/*
let students = ['Sergio', 'Nico', 'Adrian', 'Gerard', 'Riccardo', 'Xavier', 'Noelia']
// Con está función creamos la etiqueta li
function createTag(tag, tagContent) {
    return `<${tag}>${tagContent}</${tag}>`
}

function createList(createTag) {
    return `<ul>${createTag}</ul>`
}

function tagContent(students) {
    let all = createList(createTag)

    for ( let i = 0; i < students.length; i++) {
        let arrValue = students[i]
        arrValue += createTag('li', arrValue)
    }

    return
}

document.write(createList)
*/




// ---------------------------------------------------------------------------------------------
// Y de la forma en la que me salio, igual como Manu lo hizo, pero con tempate strings
let students = ['Sergio', 'Nico', 'Adrian', 'Gerard', 'Riccardo', 'Xavier', 'Noelia']

// Con está función creamos la etiqueta li
function createTag(tag, tagContent) {
    return `<${tag}>${tagContent}</${tag}>`
}

function tagContent(students) {
    let list = `<ul>`

    for ( let i = 0; i < students.length; i++) {
        let arrValue = students[i]
        list += createTag('li', arrValue)
    }

    list += `</ul>`

    return list
}

document.write(tagContent(students))