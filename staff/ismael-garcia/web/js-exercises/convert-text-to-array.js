function convertTextToArray(text) {
    var array = [];

    /*var textSplit = text.split("");
    array = textSplit;*/
    for (var i = 0; i < text.length; i++) {
        array.push(text[i]);
    }

    return array;
}
