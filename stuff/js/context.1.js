function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}// esta es mi funcion constructora

var person1= new Person('Lucatiel',26,'Female');

Person.prototype.getName = function(){
    return this.name
}
Person.prototype.getAge = function(){
    return this.age
}
Person.prototype.getGender = function(){
    return this.gender
}

var saveGetName = person1.getName;
var saveGetAge = person1.getAge;
var saveGetGender = person1.getGender;

console.log(person1) // Person {name: 'Lucatiel', age: 26, gender: 'Female'}
console.log(person1 instanceof Object) // true
console.log(person1 instanceof Person)//true


console.log(person1.getName())//Lucatiel
console.log(person1.getAge())// 26
console.log(person1.getGender())// Female

window.name='Navegador'
window.age = 23
window.gender = null
// estos de window devolveran a bajo el resultado porque saveGetName empieza por un "vacio" que es window
console.log(saveGetName()) // devuelve: vacio(sin nada) // porque se definido pero no se ha pedido ningun return de ello, y por defecto sale vacio
console.log(saveGetAge())//undefined // sale asi porque no se ha definido windows
console.log(saveGetGender())//undefined // sale asi porque no se ha definido windows