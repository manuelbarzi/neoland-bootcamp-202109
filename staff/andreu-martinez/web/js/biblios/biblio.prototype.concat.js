Biblio.prototype.concat = function() {
    var temp = new Biblio();

    for (let i = 0; i < this.length; i++) {
        temp[this.length] = this[i] 

        console.log(temp)
        
    }
    
    // for (let i = 0; i < arguments.length; i++) {
    //     temp[temp.length]= arguments[i] 
    // }

    return temp
}