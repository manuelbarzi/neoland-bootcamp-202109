console.log('> context (this)')

//window.name = 'Window'

var o = {} // new Object

o.name = 'Peter'

// function describe() {
//     return this.name
// }
var describe = function() {
    return this.name && this.color ? this.name +" " + this.color : this.name
}

console.log(describe())

o.describe = describe

console.log(o.describe())
console.log(describe())
console.log(window.describe())

//

var o = {
    name: 'O',
    describe: describe,

    p: {
        name: 'P',
        describe: describe,

        q: {
            name: 'Q',
            describe: describe
        }
    }
}

console.log(o.describe())
console.log(o.p.describe())
console.log(o.p.q.describe())

//

// function Car(name) {
//     this.name = name
// }
var Car = function(name,color) {
    this.name = name
    this.color = color
}

Car.prototype.describe = describe

var seat = new Car('Seat Ibiza', 'rojo')
var ford = new Car('Ford Fiesta', 'Amarillo')
var audi = new Car('Audi r8', 'negro')




console.log(seat.describe())
console.log(audi.describe())
console.log(seat.describe === ford.describe)
console.log(describe === Car.prototype.describe)