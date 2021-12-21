/* estamos poniendo un if ternario */
Biblio.prototype.some =function (callback) {
    var result = false
 
     for (var i = 0; (i < this.length && !result); i++) {
         var element = this[i];
         result =(callback(element,i)) ?  true : false;
              }
     return result
 }

 