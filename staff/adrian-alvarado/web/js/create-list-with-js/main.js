let students = ['Sergio', 'Nico', 'Adrian', 'Gerard', 'Riccardo', 'Xavier', 'Noelia']

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