# Favs
# Acciones del usuario 
- Al clicar en el toggle, el item se añade a favoritos, y si ya está en favoritos, se quita.

# Lugares de ejecución
- Results
- Detail 
- Favs

# División de la acción
- Declaración del clic -> en cada uno de los lugares de ejecución
- Manejo del clic -> Home
- Conexión con la API -> ./logic 

# Conexión con la API (toggle)
La función tendrá un comportamiento de toggle. Deberá esperar un vehículo que se quiera añadir a favoritos y tendrá que preguntar a la API primero si este vehiculo ya está en los favoritos del usuario. Si no está tendrá que añadirlo, y en caso de que ya estuviese deberá sacarlo.
- Paso 1: obtener la info del usuario a cambio de un token.
- Paso 2: en esa información del usuario comprobar si hay favoritos (propiedad -> favs)
- Paso 3: si no existe propiedad favs en el usuario, crearla y añadir el vehiculo en la posición 0.
- Paso 4: si existe propiedad favs, habrá que analizar todas las posiciones del array en busca del vehículo. Si está se quitará y si no se añadirá.
- Paso 5: actualizar en la API la información del usuario con la nueva propiedad favs.
- Paso 6: la función devuelve si ese id de vehiculo se ha añadido o quitado.

# Manejo de la conexión 
Esta función deberá llamar a la función que conecta con la API y manejar la respuesta recibida por esta.
- ¿Qué necesita recibir? El token del usuario y el id del vehiculo favorito.
- ¿Qué maneja? El error, si lo hay, y si no, si ha quitado o añadido el favorito.
- ¿Qué devuelve? Nada. Sólo cambia los state.

# Manejo del clic
Esta función es la encargada de recoger el clic del usuario y el id del vehículo en el que se ha hecho ese clic, y entonces llamar a la función que maneja la conexión.
- ¿Qué necesita recibir? El id del vehículo.
- ¿Qué maneja? Llama a la función que maneja la conexión.
- ¿Qué devuelve? Nada.

