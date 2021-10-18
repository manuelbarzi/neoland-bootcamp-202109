Pen.prototype.describe = function() {
    var str = "";

    str = "Color: " + this.color + ", Size: " + this.size + ", Material" + this.material +
        ", Ink: " + this.ink + ", PersonName: " + this.personName + ", Length: " + this.length;

    return str;
}

// Acciones que podemos realizar con los bolis
//  Describir sus propiedades

// Funcionamiento
//  Queremos que se escriba en un string las propiedades del boli en cuestión

// El estring sería `Color: this.color, Size: this.size, Material: this.material,
//    Ink: this.ink, PersonName: this.personName, Length: this.length.`

// Llamar a un método de boli
//  Pen.describe()