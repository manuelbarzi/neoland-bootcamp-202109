# Acciones del usuario
- hacer clic botón favoritos para añadir favoritos
- hacer clic en el botón favoritos para eliminar un favorito
# Localizaciones de la funcionalidad
- result
- detail
# explicación de la funcionalidad
Nuestra aplicación añadirá un vehiculo favorito a nuestro usuario
en caso de que el vehículo no esté en favoritos.
Si el vehículo está en favoritos lo quitará
Además si nuestro usuARIO NO TIEN ENINGÚN FAVORITO tendremos wue crarle la propiedad favoritos
- llamada a la Api(logica de negocio)
- una función que maneja el resultado de la llamada y aplica todas las logicas necesarias que actulizan nuestra visual(capa de presentación)
- función que capta la interación del usuario
Nota:
Este tipo de funcionalidad se llama toggle(comportamiento de toggle)
# FUNCIÓN COMO LÓGICA DE NEGOCIO:
Objetivo:
Es guardar el favorito o eliminarlo y devolver una respuesta de si se ha guardado o se ha eliminado
- pedimos la información que necesitamos,  que será:(token, id,)
- hacemos una llamada a la Api y le pedimos:(usuario)
- manejamos la respuesta y si recibimos el usuario miramos si tiene Favs o no
-- si tiene Favs comprobamos si el id está o no, si está lo eliminamos y devolvemos la respuesta diciendo que se a elminado el favorito y si no está lo añadimos y respondemos que se ha añadido a favoritos
-- si no tiene Favs creamos la propiedad Favs y añadimos el id y respondemos que se ha añadido a favoritos
# FUNCION QUE MANEJA EL RESULTADO DE LA LLAMADA AL LOGIC:
Objetivo:
Hacer la llamada al logic, manejar la respuesta, y pintar el corazón o no
- QUE NECESIAMOS
-- id
- QUE LOGICA EMPLEAMOS
-- manejamos la respuesta de logic en busca de errores, si no tenemos errores comprobamos que respuesta nos ha dado, si nos responde que elina el favorito despintamos el corazón. Si nos responde que añade el favorito pintamos el corazón
- QUE DEVOLVEMOS
-- nada porque no se requiere
# FUNCION QUE CAPTA LA ITERACION DEL USUARIO(onClick)
Objetivo:
Captar la iteracion del usuario(el click) y desencadenar el proceso para grabar dicha iteración
- QUE NECESITAMOS
-- id
- QUE LOGICA EMPLEAMOS
-- recuperamos el id y llamamos a la función que descadena el proceso
- QUE DEVOLVEMOS
-- nada, porque no tenemos ningún objeto