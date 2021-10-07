function print(values) {

    for(var i = 0; i < values.length; i++) {
        console.log(values[i])
    }
}

function printObj(object, value) {

    for(let i = 0; i < object.length; i++) {
        var print = object[i][value]
        console.log(print)
    }
}
