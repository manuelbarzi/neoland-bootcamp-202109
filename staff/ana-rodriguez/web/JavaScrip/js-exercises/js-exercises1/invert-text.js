function invertText(text) {
     var result = "";
     var revertText = text;
      
     for (var i = 0; i < revertText.length; i++) {
        var position = revertTex.length -1 - i;
        result += revertText[position];
      }
     return result;

}