//js antiguo

// console.log('>classes')

// function Vehicle(brand, year, motor, color, plate){
//     this.brand=brand
//     this.year=year
//     this.motor=motor
//     this.color=color
//     this.plate=plate
//     this.lightsOn=false
// }

// Vehicle.prototype.move=function(){
//     return 'humo '
// }

// Vehicle.prototype.toggleLights=function(){
// this.lightsOn = !this.lightsOn
// return this.lightsOn? ' luz': 'oscuridad '
// }

// var v =  new Vehicle('Ford','Fiesta',2005,'diesel','grey','1234BCN')


// function Car(brand, model,year,motor,color,plate){
//     Vehicle.call(this,brand,model,year,motor,color,plate)
// }

// Car.prototype=Object.create(Vehicle.prototype)
// Car.prototype.constructor=Car

// Car.prototype.move=function(){
//     return'car'
// }

// function Moto(brand, model,year,motor,color,plate){
//     Vehicle.call(this,brand,model,year,motor,color,plate)
// }

// Moto.prototype=Object.create(Vehicle.prototype)
// Moto.prototype.constructor=Moto

// Moto.prototype.move=function(){
//     return'Moto'
// }
// var c= new Car('Ford','Fiesta',2005,'diesel','gray','1234BCN')
// console.log(c.toggleLights)
// console.log(c.move())

// var m= new Moto ('Ducatti','Scrambler',2019,'petrol','orange','5675BCN')
// console.log(m.toggleLights)
// console.log(m.move())

//to classes (js6)

class Vehicle {
    constructor(brand, model, year, motor, color, plate) {
        this.brand = brand
        this.model = model
        this.year = year
        this.motor = motor
        this.color = color
        this.plate = plate
        this.lightsOn = false
    }

    move() {
        return '💨'
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn

        return this.lightsOn ? '💡' : '🌑'
    }
}

var v = new Vehicle('Ford', 'Fiesta', 2005, 'diesel', 'gray', '1234BCN')

console.log(v.toggleLights())
console.log(v.move())

class Car extends Vehicle {
    constructor(brand, model, year, motor, color, plate) {
        super(brand, model, year, motor, color, plate)
    }

    move() { // overrriding
        return '🚗💨'
    }
}

class Moto extends Vehicle {
    constructor(brand, model, year, motor, color, plate) {
        super(brand, model, year, motor, color, plate)
    }

    move() { // overriding
        return '🛵💨'
    }
}

var c = new Car('Ford', 'Fiesta', 2005, 'diesel', 'gray', '1234BCN')
console.log(c.toggleLights())
console.log(c.move())

var m = new Moto('Ducatti', 'Scrambler', 2019, 'petrol', 'orange', '5657BCN')
console.log(m.toggleLights())
console.log(m.move())