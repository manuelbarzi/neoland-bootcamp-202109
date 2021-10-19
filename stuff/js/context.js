console.log('>conetxt(this)')

var o = {}

o.name = 'Peter'
function describe(){
    return this.name // no apunta a nada, sino a algo global que en este caso es a Window que es un object, que auque ponga name es un nombre vacio
}

console.log(describe())

o.describe=describe // la funcion describe como propiedad del objeto

console.log(o.describe()) //en este momento a o se le asigna{name:'Peter, describe:f}. lo mismo pasa con this. pero en este caso nos retornara 'Peter'
console.log(describe())// es lo mismo que el de a bajo por eso devuelve window
console.log(window.describe())

//otra forma de declarar una var para que sea una funcion que se queda en memoria
//var describe = function(){ return this.name} // lo unico que no tiene nombre la function

//Desclara un objeto o que tiene una propiedad p que tiene propiedad de q que tiene una propiedad describe que apunta a la function describe de fuera
var o = {
    p:{
        q:{
            describe:describe
        }
    }
}

// 
var o={
    name:'O',
    describe:describe,
    p:{
        name:'P',
        describe:describe,
        q:{
            name:'1',
            describe:describe,
        }
    }
}

console.log(o.describe())
console.log(o.p.describe())
console.log(o.p.q.describe())

// funcion constructora

var Car = function (name) {
    this.name=name
}

Car.prototype.describe=describe

var seat= new Car ('Seat Ibiza')
var ford= new Car ('Ford Fiesta')

console.log(seat.describe())
console.log(ford.describe())
// estamos llamando a la propiedad describe que es la de funcion de fuera que se va adaptandos y en este caso nuestra funcion constructora nos devuelve '...'
