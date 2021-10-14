

function lastindexof(array, element, lastIndexOf){
    for (var i = lastIndexOf ? lastIndexOf : array.length; i >= 0; i--) {
      var item = array[i];
        if (item === element) {
          return i
        }
    }
    return -1
  }


  




//Conseguir en formato numero donde esta situado o posicionado el ultimo array repetido o no