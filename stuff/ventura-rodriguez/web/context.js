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


console.log("1", person1);   // Devuelve: Person{name: "Lucatiel", age: 26, gender: "female"}
console.log("2", person1 instanceof Object); // Devuelve: true
console.log("3", person1 instanceof Person); // Devuelve: true


console.log("4", person1.getName()); // Devuele: "Lucatiel"
console.log("5", person1.getAge());  // Devuelve: 26
console.log("6", person1.getGender());   // Devuelve: "Female"

console.log("7", saveGetName()); // Devuelve: ""
console.log("8", saveGetAge()); // Devuele: undefined
console.log("9", saveGetGender());   // Devuelve: undefined


window.name = "Navegador";
window.age = 23
window.gender = null

console.log("7", saveGetName()); // Devuelve: "Navegador"
console.log("8", saveGetAge()); // Devuele: 23
console.log("9", saveGetGender());   // Devuelve: null