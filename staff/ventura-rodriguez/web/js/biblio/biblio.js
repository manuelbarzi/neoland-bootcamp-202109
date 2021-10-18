function Biblio() {
    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }
    this.length = arguments.length;
}


// Bliblio debe ser una copia de la instacia Array