Biblio.prototype.filter = function(callback){
var result= new Biblio();
var j=0;

    for (let i = 0; i < this.length; i++) {
        var element = this[i];
        
        if(callback(element,i)){
            result[j]=element;
            j++;
        }
    }
    return result
}