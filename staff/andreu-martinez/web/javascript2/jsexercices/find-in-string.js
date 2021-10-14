var pais = ["Mexico", "España", "Argentina", "Chile", "Colombia", "Venezuela", "Perú", "Costa Rica"]

function paises(valpais, buscar){
    for (var i = 0; i < valpais.length; i++) {
        if (valpais[i].includes(buscar)){
            console.log(valpais[i])
        }else{
            document.write("no encontrado")
        }
    }
}