# Acciones del usuario
- Hacer click en un boton para abrir un text area para añadir un comentario o nota
- Escribir el comentario en el campo de texto
- Enviar el comentario a traves de un boton
- Ver el aparatado de comentarios del usuario
- Eliminar comentario

# Localizacion de las acciones
- En detalles del vehiculo
- En los favoritos del vehiculo

# Implementacion de la funcionalidad
Es una funcion que sirve para que el usuario deje un comentario personal en dicho vehiculo, solo visible por el mismo. El comentario se asocia al usuario y al vehiculo en concreto y un vehiculo puede contener varios comentarios. El comnetario debe tener un id para poder manejarlo.

- una funcion que capta la itineracion del usuario y desencadena el proceso(evento agregar)
- una funcion que maneja los datos y la conexion con la API(logic agregar)
- una funcion que maneja los errores y la respuesta de nuestra funcion logic (manejo agregar)

Nota: si la propiedad comment en el usuario no existe, deberás crearla, y si el usuario se queda sin comentarios, quitara la propiedad del objeto guardado

# Funcion evento agregar
- Necesitamos el texto y el id del coche.
- Llamamos a la funcion encargada de realiza toda la logica visual, con los datos purgados
- No devolvemos nada.

# Funcion manejo agregar
- Necesitamos el texto y el id del vehiculo.
- Llamamos a nuestra funcion logic agregar, le pasamos el token, el id y el texto y manejamos los erores y la repuesta. si hay error , enviamos un modal con el error al usuario. Si hay respuesta  y se ha agregado el comentario, mandamos un modal al usuario para informarle
- No devolvemos nada.

# Funcion logic agregar
- Esta funcion recibe como datos el token para autorizar el usuario, el id del vehiculo al cual queremos comentar y una callback para luego manejar la respuesta, que puede ser un error o el vehiculo en particular con sus comentarios si los tienen.
- En primera instancia le ahcemos un pedido a la API para que nos deuvelva el usuario, con la repeusta comprobamos si tiene la propiedad comment. Si tiene comentario se lo agregamos a esta propiedad el nuevo objeto con su id y el comentario, y si no lo tiene, se crea la propiedad y se agrega el objecto con su id y el comentario.
- Devuelvo un error o la confirmación.

