/* Carácter del medio
Debés crear una función llamada `middleCharacter` que reciba un `string` por parámetro y devuelva sus caracteres del medio.

Ejemplo: 
-	middleCharacter(“plataforma5”) debe retornar “f”
-	middleCharacter(“hola”) debe retornar “ol”
-	middleCharacter(“cosas”) debe retornar “s”  */

function middleCharacter (string) {
    let result = ''
    if (string.length%2==0) {
        let half = string.length/2 
        for (let i=0; i < half; i++ ){
            if (i === half -1) {
                result += string[i]
                result += string[i+1]
            }  
        }

    } if (string.length%2===1){
        let half = string.length/2
        half-=0.5
        for (let i=0; i <= half; i++){
            if (i === half -1 ){
                result += string[i]
            }
        }
    
    }

    return result


}

middleCharacter ('holas')