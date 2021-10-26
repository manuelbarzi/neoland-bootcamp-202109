//lenguaje de marcado similiar a html, se debe definir tus propias etiquetas. el proposito es compartir datos a traves de diferentes sistemas, como internet
//http: protocolo de transferencia de hipertexto, es estandar
//JSON : fichero de estructura de datos
//XMLHttpRequest : objeto de js proporciona una forma facil de obtener informacion de una URL sin recargar la pagina completa.
//tienen varios metodos que se añaden poniendo var xhr= new XMLHttpsRequest, y luego xhr.open()
var xhr= new XMLHttpRequest
//Si en la consola pongo xhr me sale todas los metodos que puedes hacer 
// consola. xht.onload(si funciona)

//xhr.open('GET', 'https://b00tc4mp.com/index.html')
// xhr.send() lo que va a hacer es abrir lo que quiero que me abra el xhr.open
//POST GET PUT DELETE: SISTEMA CRUD(create Reade Update delete) 



//los pasos son:
//crear la instancia xhr
//definir la funcion que lana mi llamada
//definir que va a ocurrir cuando la llamada obtenga la respuesta 'xhr.onload'
//Abrir el canal de comunicacion 'xhr.open()'
//configurar como nos vamos a comunicar 'xhr.setRquestHeader()'
//enviar la informacion del servidor 'xhr.send({Info a enviar si hay})'
