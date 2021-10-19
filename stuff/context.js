console.log('> context (this)')

window.name = 'Window'

var o = {} // new Object

o.name = 'Peter'

// function describe() {
//     return this.name
// }
var describe = function() {
    return this.name
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
var Car = function(name) {
    this.name = name
}

Car.prototype.describe = describe

var seat = new Car('Seat Ibiza')
var ford = new Car('Ford Fiesta')

console.log(seat.describe())
console.log(ford.describe())
console.log(seat.describe === ford.describe)
console.log(describe === Car.prototype.describe)





// Explicación de Ventu

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var person1 = new Person("Lucatiel", 26, "Female");


Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.getAge = function() {
    return this.age;
}

Person.prototype.getGender = function() {
    return this.gender;
}


var saveGetName = person1.getName;
var saveGetAge = person1.getAge;
var saveGetGender = person1.getGender;


console.log("1", person1); // Person {name: "Lucatiel", age: 26, gender: "female"}
console.log("2", person1 instanceof Object); // true
console.log("3", person1 instanceof Person); // true


console.log("4", person1.getName()); // "Lucatiel"
console.log("5", person1.getAge()); // 26
console.log("6", person1.getGender()); // "Female"

console.log("7", saveGetName()); // ""
console.log("8", saveGetAge()); // undefined
console.log("9", saveGetGender()); // undefined


window.name = "Navegador";
window.age = 23
window.gender = null

console.log("7", saveGetName()); // "Navegador"
console.log("8", saveGetAge()); // 23
console.log("9", saveGetGender()); // null