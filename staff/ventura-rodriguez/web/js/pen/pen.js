function Pen(color, size, material, ink, personName) {

    this.color = color;
    this.size = size;
    this.material = material;
    this.ink = ink;
    if (personName) this.personName = personName;
    this.length = arguments.length;
}


// Propiedades de objetos bolis
//  Colo    =)
//  Tamaño  =)
//  Material    =)
//  Color de tinta  =)
//  Nombre persona  =)

// llamar a una propiedad de boli
//  Pen.color
//  Pen.color = "red"