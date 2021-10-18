console.log( '> constructor functions')

var o = new Object //{}
function Riccardo() {
    
}

function Nico(){

}

var r = new Riccardo
var n = new Nico

console.log(r instanceof Object) //true
console.log(r instanceof Riccardo)//true
console.log(r instanceof Nico) //false
console.log(n instanceof Object) // true
console.log(n instanceof Riccardo) //false
console.log(n instanceof Nico) //true

Riccardo.prototype.pop = function (){
    return 'pop'
}

console.log(r.pop())

Nico.prototype.dance = function (){
    return '.'
}

console.log(n.dance())

// 
function Human(name,gender,age) {
    this.name = name            //this es para apuntar propiedades a ese objeto
    this.gender = gender
    this.age = age
}

var p = new Human ('Peter Pan','male', 15)
var w = new Human ('Wendy Pan','female',14)

console.log(p)
console.log(w)

var r= new Human ('Riccardo Montanari','female',26)
var n= new Human ('Noelia Saura','female',26)
var m= new Human ('Manuel Barzi','male', 43)
var s= new Human ('Sergio Ayala','male',30)
var g= new Human ('Gerard Sole','male',16)
var a= new Human ('Ana Rodriguez','female',31)

var staff = [p,w,r,n,m,s,g,a]
var women = staff.filter(function(human){
    return human.gender==='female'
})
console.log(women)

Human.prototype.walk = function(){
    return walk
}
Human.prototype.eat = function (){
    return eat
}
Human.prototype.pee= function (){
    return pee
}
Human.prototype.poo=function(){
    return poo
}

Human.prototype.toString = function(){
    return this.name + ','+ this.gender + ','+ this.age
}

console.log(r.toString())
console.log(a.toString())
console.log(r.toString===a.toString) 
Human.prototype.toString = function(){return this.name.toUpperCase()}
console.log(r.toString ())
console.log(a.toString ())
console.log(r.toString === a.toString)

//
function Biblio(){
    for(var i = 0 ; i < arguments.length; i++){
        this[i]= arguments[i]
    }
    this.length =arguments.length
}

var b= new Biblio ('a','b','c')
var b2= new Biblio (true,false,false,true,true)
console.log(b)

for(var i = 0; i<b.length;i++){
    var element= b[i]
    console.log(element)
}
for(var i = 0; i<b2.length;i++){
    var element= b2[i]
    console.log(element)
}

Biblio.prototype.forEach= function(callback){
    for(var i=0;i<this.length;i++){
        callback(element,1)
    }
}

b.forEach(function(char){
    console.log(char)
})
b2.forEach(function(bool){
    console.log(bool)
})

console.log(b instanceof Array)
console.log(b instanceof Object)
console.log(b instanceof Biblio)

Biblio.prototype.push=function (){
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++
    }
    return this.length
}
a= new Array
b= new Biblio

a.push='Hola','mundo'
console.log(a)

b.push='hola','mundo'
console.log(b)

