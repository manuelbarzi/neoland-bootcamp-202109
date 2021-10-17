function lastIndexOf(array, element, index){
for (var i =index? index : array.length; i >=0; i--) {
    var item = array[i];
      if(item === element){
          return i
      }
    return -1
}
}