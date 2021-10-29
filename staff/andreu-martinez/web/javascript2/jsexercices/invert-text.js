function invertText(txt){
    var revert = "";
    var copyText = txt;

    for (let i = 0; i < txt.length; i++) {
        var position = txt.length - 1 - i;
        revert += copyText[position];       
    }

    return revert;
}