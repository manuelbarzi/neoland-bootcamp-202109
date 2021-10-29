function countVocals(text){

var vocals = {a: 0,e: 0,i: 0,o: 0,u: 0}
    
    for (var i = 0; i < text.length; i++) {
        var letter = text[i]
        if(letter === 'a' || letter === 'à' || letter === 'á' || letter === 'ä')
        {
            vocals.a ++
        }else if(letter === 'e' || letter === 'è' || letter === 'é' || letter === 'ë'){
            vocals.e ++
        }else if(letter === 'i' || letter === 'ì' || letter === 'í' || letter === 'ï'){
            vocals.i ++
        }else if(letter === 'o' || letter === 'ò' || letter === 'ó' || letter === 'ö'){
            vocals.o ++
        }else if(letter === 'u' || letter === 'ù' || letter === 'ú' || letter === 'ü'){
            vocals.u ++
        }
    }
return vocals
}