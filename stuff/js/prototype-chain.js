console.log('>prototype-chain')

function Being(species,age){
    this.species= species
    this.age=age

}
Being.prototype.describe= function(){
    for(var key in this ) // for que nos permite iterar en las propiedades de un objeto.
        console.log(key, this[key]) // si pedimos a consola plant.describe nos devolvera todo lo de function being + el for
}
//  en la consola
// var m=new Being('primate',43)
// m -> Being{species:'primate',age:43}
// var n = new Being('human'36)
// n-> Being{species:'human',age:36}


// Being.prototype.walk = function(){
//     return 'walk...'
// }

// var human = new Being ('human', 10)

// var plant = new Being('vegetable',0.3)
// console.log(planta.walk())
// para la planta la function no aplica pero para human si
function Plant (denomination,age){
    this.denomination= denomination
    Being.call(this,'plant', age)
}

Plant.prototype=Object.create(Being.prototype)
Plant.prototype.constructor = Plant

Plant.prototype.photosynt = function (){
    return 'sun...hoja'
}
var rose = new Plant ('Rose',0.01)
var rose = new Plant('Cactus',10)
console.log(rose.photosynt())
console.log(rose)
console.log(rose instanceof Plant)
console.log(rose instanceof Being)
console.log(rose instanceof Object)
console.log(rose instanceof Human)

//funcion con animales
function Animal(denomination, age){
    this.denomination= denomination
    Being.call(this,'animal',age)
}

Animal.prototype =Object.create(Being.prototype)
Animal.prototype.constructor= Animal
Animal.prototype.eat= function(){
    return 'comer'
}
Animal.prototype.pee = function(){
    return 'pee'
}
Animal.prototype.poo = function(){
    return 'poo'
}
var symba = new Animal('Lion',12)
console.log(symba)
console.log(symba.eat())
console.log(symba.pee())
console.log(symba.poo())
console.log(symba instanceof Plant)
console.log(symba instanceof Being)
console.log(symba instanceof Animal)
console.log(symba instanceof Object)
console.log(symba instanceof Human)
//otra function constructora para los seres humanos
function Human(name,age,weight){
    this.name= name
    //this.age=age
    Animal.call (this,'human',age) // si la llamaramos Being('human',age) - nos devolveria undefined
    this.weight= weight
}
// Human.prototype = new Being // el prototypo de human tenga propiedades de del prototypo de being
// Human.prototype.constructor = Human // con esta propiedad podemos pedir __proto__.__proto__ de lo que queremos y nos devolvera toda la informacion 

// var prototype= new Being
// prototype.constructor= Human    // => es lo mismo que el de arriba 
// Human.prototype= prototype

// Human.prototype=new Being
// delete Human.prototype.species    //=> es lo mismo que las propiedades del being cuando se la has asignado a human
// delete Human.prototype.species

Human.prototype=Object.create(Animal.prototype) //Human.prototype= new Being
Human.prototype.constructor=Human

Human.prototype.walk=function(){
    return this.age<=1?'walk in progress ': 'walk...'
}
var nico = new Human ('nico nieva', 36, 75)
console.log(nico)
console.log(nico.walk())
console.log(nico.eat())
console.log(nico.pee())
console.log(nico.poo())
console.log(nico instanceof Human)
console.log(nico instanceof Being)
console.log(nico instanceof Animal)
console.log(nico instanceof Object)
console.log(nico instanceof Array)
 
// consola pido nico me devuelve: 
// Human {name: 'nico', age: 36, weight: 75}
// age: 36
// name: "nico"
// weight: 75
// [[Prototype]]: Object
// walk: ƒ ()
// constructor: ƒ Human(name,age,weight)
// [[Prototype]]: Object


console.log(nico.__proto__)
console.log(nico.__proto__===Human.prototype)
console.log(nico.__proto__.__proto__)
console.log(nico.__proto__.__proto__=== Animal.prototype)//permite ver todo lo que se hereda del prototype

// //nico hereda las propiedades de human i de objecto
console.log(nico.__proto__.__proto__.__proto__)// da null porque no hereda mas prototype
console.log(nico.__proto__.__proto__.__proto__===Being.prototype)

console.log(nico.__proto__.__proto__.__proto__.__proto__)
console.log(nico.__proto__.__proto__.__proto__.__proto__===Object.prototype)

console.log(nico.__proto__.__proto__.__proto__.__proto__.__proto__) //null

//



function Product (type, brand, quantity){
    this.type= type
    this.brand = brand
    this.quantity = quantity
}

Product.prototype.toString= function(){ //overrriding // busca el toString  dentro del objeto
    return '>'+ this.type +','+ this.brand + ','+ this.quantity
}

var socks1 = new Product('socks', 'adidas', 100)
var socks2 = new Product('socks', 'nike', 100)
var socks3 = new Product('socks', 'puma', 100)
var tshirts1 = new Product('t-shirt', 'adidas', 100)
var tshirts2 = new Product('t-shirt', 'nike', 100)
var tshirts3 = new Product('t-shirt', 'puma', 100)

function Socks(brand, quantity){
    Product.call(this,'socks',brand, quantity)
}
Socks.prototype = Object.create(Product.prototype)
Socks.prototype.constructor=Socks

function Tshirt(brand, quantity){
    Product.call(this,'socks',brand, quantity)
}
Tshirt.prototype = Object.create(Product.prototype)
Tshirt.prototype.constructor=Tshirt

var socks1 = new Socks('socks', 'adidas', 100)
var socks2 = new Socks('socks', 'nike', 100)
var socks3 = new Socks('socks', 'puma', 100)
var tshirts1 = new Tshirt('t-shirt', 'adidas', 100)
var tshirts2 = new Tshirt('t-shirt', 'nike', 100)
var tshirts3 = new Tshirt('t-shirt', 'puma', 100)


var products= [socks1,socks2,socks2,tshirts1,tshirts2,tshirts3]

products.forEach(function(product){
    console.log(product.toString())
})

// var allSocks = products.filter(function(product){
//     return product.type==='socks'
// })

var allSocks=products.filter(function(products){
    return products instanceof Socks
})
console.log(allSocks)

var allTshirts= products.filter(function(products){
    return products instanceof Tshirt
})

console.log(allTshirts)



// delete products.prototype.toString

// Object.prototype.toString= function(){
//     return'###' + this.type +','+ this.brand + ','+ this.quantity
// }

// products.forEach(function(product){
//     console.log(product.toString())
// })
