function convertTextToArray(text) {
    var array = []

    for ( i = 0; i < text.length; i++) {

        array = array + text[i];
        array = [...text]

    }



    return array
}