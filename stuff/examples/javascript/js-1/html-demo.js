debugger

var createTag = function(tag, value) {
    return '<' + tag + '>' + value + '</' + tag + '>'
}

var createList = function(values) {
    var list = '<ul>'

    for (var i = 0; i < values.length; i++) {
        var value = values[i]

        list = list + createTag('li', value)
    }

    list = list + '</ul>'

    return list
}

//var t = createTag('h1', 'Sergio')
//console.log(t)

//var list = createList(['Sergio', 'Nico', 'Adrian', 'Gerard', 'Riccardo'])
var students = ['Sergio', 'Nico', 'Adrian', 'Gerard', 'Riccardo']
var list = createList(students)
document.write(list)