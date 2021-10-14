function startsWith(string,stringSearch,position){
var starts = ''
var bool=false;

 for (let i = position ? position : 0; i < string.length; i++) {
      starts += string [i]
      if(starts===stringSearch){
          bool=true;
      }
     
 } 
      return bool;

}
