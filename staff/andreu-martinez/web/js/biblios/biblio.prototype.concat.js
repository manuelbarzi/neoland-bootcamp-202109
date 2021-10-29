Biblio.prototype.concat = function() {
    

    for (let i = 0; i < arguments.length; i++) {

        for (let j = 0; j < arguments[i].length; j++) {
            
            
        }
        this[i] = arguments[i] 

        console.log(this)
        
    }
    
    // for (let i = 0; i < arguments.length; i++) {
    //     temp[temp.length]= arguments[i] 
    // }

    return this
}