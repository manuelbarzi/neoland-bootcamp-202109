// TODO implement the standalone version of String.prototype.startsWith()
//indica si un string de texto comienza con los caracterese de un string de texto en concreto, devoliendo true o false
// tambien se puede indicar el string , numero para indicar donde esta esa palabra, contando las letras
// function startWith(empezar, comprobar) {
//     var string = empezar.startsWith(comprobar)
//     return string
// }

function startWith(string,stringSearch, position) {
    var bool = false
    var starts = ''
    for (let i = position ? position:0; i < string.length; i++) {
            starts += string [i]
        if (starts === stringSearch){
                bool = true
        }
        
    }
    return bool
}