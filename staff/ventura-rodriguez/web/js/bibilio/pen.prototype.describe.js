Pen.prototype.describe = function() {
    var str = "";

    str = "Color: " + this.color + ", Size: " + this.size + ", Material" + this.material +
        ", Ink: " + this.ink + ", PersonName: " + this.personName + ", Length: " + this.length;

    return str;
}


// Funcionamiento
//  Queremos que se escriba en uns string las propiedades del boli en cuestión

// El estring sería `Color: this.color, Size: this.size, Material: this.material,
//    Ink: this.ink, PersonName: this.personName, Length: this.length.`


function saludar(name) {
    console.log("Hola " + name);
}