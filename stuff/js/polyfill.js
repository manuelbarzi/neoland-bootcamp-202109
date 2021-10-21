// a todos los arrays que nos devuelva un valor random
console.log('> polyfills')
var a= ['nico','sergio','riccardo','adrian', 'gerard', 'ismael','ana','noelia']
// un superpoder a un array se dice polyfill: llenar algo que estaba vacio
Array.prototype.random=function(){
    var index = Math.floor(Math.random() * this.length)
    return this[index]
}

var winner = a.random()
console.log(winner)