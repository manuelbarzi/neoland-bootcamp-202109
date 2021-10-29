function Cortes(nombre, sexo, años) {
    this.nombre = nombre;
    this.sexo = sexo;
    this.años = años;
}

Cortes.prototype.describe = function () {
    for (var key in this) {
        console.log(key, this[key])
    }
}

function Integrante(parentela, nombre, sexo, años) {
    this.parentela = parentela;
    Cortes.call(this, nombre, sexo, años)
}

Integrante.prototype = Object.create(Cortes.prototype);
Integrante.prototype.constructor = Integrante

Integrante.prototype.surf = function () {
    return "SURFING!"
}

var alvaro = new Integrante("hijo menor", "alvaro", "masculino", 28)

///////

function Alimento(tipo, comestible) {
    this.tipo = tipo;
    this.comestible = comestible;
}

Alimento.prototype.describe = function () {
    for (var key in this) {
        console.log(key, this[key])
    }
}

function Verdura(nombre, comestible) {
    this.nombre = nombre;
    Alimento.call(this, "Verdura", comestible);
}

Verdura.prototype = Object.create(Alimento.prototype);
Verdura.prototype.constructor = Verdura;

Verdura.prototype.cocinar = function() {
    if(this.comestible === "si") return "🍳"
    else return "Venenoso"
}

var patata = new Verdura("Patata", "si")
var puerro = new Verdura("Puerro", "si")
var hongoRojo = new Verdura("Hongo Rojo", "No")

function Fruta(nombre, comestible) {
    this.nombre = nombre;
    Alimento.call(this, "Fruta", comestible);
}

Fruta.prototype = Object.create(Alimento.prototype)
Fruta.prototype.constructor = Fruta

Fruta.prototype.cocinar = function() {
    if(this.comestible === "si") return "🍳"
    else return "Venenoso"
}

var manzana = new Fruta("Manzana", "si")
var banana = new Fruta("Banana", "si")