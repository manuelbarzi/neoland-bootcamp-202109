Biblio.prototype.filter = function(condition) {
    var result = new Biblio;

    for (let i = 0; i < this.length; i++) {
        var bool = condition(this[i], i);
        if (bool) {
            result[result.length] = this[i];
            result.length++;
        }
    }
    return result;
}



























































// Biblio.prototype.filter = function(callback) {

//     var res = new Biblio;

//     for (let i = 0; i < this.length; i++) {
//         var bool = callback(this[i], i);
//         if(bool) {
//             res[res.length] = this[i];
//             res.length ++;
//         }
//     }
//     return res;
// }


// Biblio.prototype.filter debe ser igual a Array.prototype.filter