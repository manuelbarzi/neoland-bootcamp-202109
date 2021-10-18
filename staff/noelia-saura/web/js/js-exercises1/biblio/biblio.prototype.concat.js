Biblio.prototype.concat=function() {
    
    for (let i = 0; i < arguments.length; i++) {
  
        for (let j = 0; j <arguments[i].length; j++) {
            var argu = arguments[i]
            this[this.length] =argu[j]        
            this.length++    
        }
    }
    return this
    }