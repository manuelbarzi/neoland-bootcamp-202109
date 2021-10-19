Biblio.prototype.lastIndexOf =function (element, lastIndexOf){
    for (var i = lastIndexOf ? lastIndexOf : this.length; i >= 0; i--) {
      var item = this[i];
        if (item === element) {
          return i
        }
    }
    return -1
  }


  