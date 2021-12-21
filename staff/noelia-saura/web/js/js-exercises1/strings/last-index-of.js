function lastIndexOf(string,element, lastindexof){
    for (var i =lastindexof? lastindexof : string.length; i >=0; i--) {
        var item = string[i];
          if(item === element){
            return i
          }
        } 
        return -1
    }