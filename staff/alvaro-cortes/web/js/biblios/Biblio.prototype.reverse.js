Biblio.prototype.reverse = function () {
    
    /*for(let i = 0; i < array.length; i++) {
        newArray.unshift(array[i])
    }*/

    /*for(let i = 0; i < array.length / 2; i++) {
        array[array.length - 1 - i] = array[i]
        
    }*/ 

    for(var i = 0; i < this.length / 2; i++) {
        var temp = this[i]
       
        this[i] = this[this.length - 1 - i]
        
        this[this.length - 1 - i] = temp
    }
    return this;
}