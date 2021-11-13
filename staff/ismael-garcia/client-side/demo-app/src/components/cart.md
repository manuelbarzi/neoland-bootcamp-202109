# Cart
# Acciones del usuario y lugares de ejecución
- Botón "Add to Cart". (Detail) Para añadir el artículo al carrito de compra. Se irá registrando la cantidad que se quiere comprar de cada artículo. Al clicar, el artículo se añadirá al carrito, y cada vez que se clice se sumará uno a la cantidad.
- Botón "Cart". (Home) Para ir al cart.
- Botón "Add Item". (Cart) Para sumar un item a la cantidad.
- Botón "Remove Item". (Cart) Para restar un item a la cantidad. 
- Botón "Remove from Cart". (Cart) Para quitar el artículo del carrito. Al clicarlo, la cantidad se reducirá en uno, y si hay sólo uno, el artículo desaparecerá del carrito.
- Botón "Proceed to Pay". (Cart) Para pasar a la pantalla donde se efectúa el pago.


<!-- ----- "Add to Cart" ----- -->
# Botón "Add to Cart"
# División de la acción
- Clic: Detail
- Manejo de la conexión: Home
- Conexión con la API: ./logic 

# Conexión con la API
Función deberá esperar un vehículo que se quiera añadir al carrito de compra y tendrá que preguntar a la API primero si este vehiculo ya está en el cart. Si no está tendrá que añadirlo, y en caso de que ya estuviese deberá sumar uno a la cantidad.
- Paso 1: obtener la info del usuario a cambio de un token.
- Paso 2: en esa información del usuario comprobar si hay artículos en el carrito. El usuario deberá tener una propiedad cart, que será un array de objetos, cada uno con dos keys, id y cantidad.
- Paso 3: si no existe propiedad cart en el usuario, crearla y añadir el vehículo en la posición 0.
- Paso 4: si existe propiedad cart, habrá que analizar todas las posiciones del array en busca del vehículo. Si está se añadirá uno a la cantidad, y si no estaba se añadirá al array.
- Paso 5: actualizar en la API la información del usuario con la nueva propiedad cart.
- Paso 6: la función devuelve si se ha añadido el artículo al cart.

# Manejo de la conexión 
Función encargada de llamar a la función que conecta con la API y manejar la respuesta recibida por esta.
- ¿Qué necesita recibir? El token del usuario y el id del vehiculo que se quiere añadir al cart.
- ¿Qué maneja? El error, si lo hay, y si no, si se ha añadido el artículo.
- ¿Qué devuelve? Nada.

# Manejo del clic
Función encargada de recoger el clic del usuario y el id del vehículo en el que se ha hecho ese clic, y entonces llamar a la función que maneja la conexión.
- ¿Qué necesita recibir? El id del vehículo.
- ¿Qué maneja? Llama a la función que maneja la conexión.
- ¿Qué devuelve? Nada.


<!-- ----- "Cart" ----- -->
# Botón "Cart"
# División de la acción
- Clic: Home
- Manejo de la conexión: Home
- Conexión con la API: ./logic 

<!-- Falta hacer desde aquí -->
# Conexión con la API
Función deberá esperar el token del usuario que se quiera añadir al carrito de compra y tendrá que preguntar a la API primero si este vehiculo ya está en el cart. Si no está tendrá que añadirlo, y en caso de que ya estuviese deberá sumar uno a la cantidad.
- Paso 1: obtener la info del usuario a cambio de un token.
- Paso 2: en esa información del usuario comprobar si hay artículos en el carrito. El usuario deberá tener una propiedad cart, que será un array de objetos, cada uno con dos keys, id y cantidad.
- Paso 3: si no existe propiedad cart en el usuario, crearla y añadir el vehículo en la posición 0.
- Paso 4: si existe propiedad cart, habrá que analizar todas las posiciones del array en busca del vehículo. Si está se añadirá uno a la cantidad, y si no estaba se añadirá al array.
- Paso 5: actualizar en la API la información del usuario con la nueva propiedad cart.
- Paso 6: la función devuelve si se ha añadido el artículo al cart.

# Manejo de la conexión 
Función encargada de llamar a la función que conecta con la API y manejar la respuesta recibida por esta.
- ¿Qué necesita recibir? El token del usuario y el id del vehiculo que se quiere añadir al cart.
- ¿Qué maneja? El error, si lo hay, y si no, si se ha añadido el artículo.
- ¿Qué devuelve? Nada.

# Manejo del clic
Función encargada de recoger el clic del usuario y el id del vehículo en el que se ha hecho ese clic, y entonces llamar a la función que maneja la conexión.
- ¿Qué necesita recibir? El id del vehículo.
- ¿Qué maneja? Llama a la función que maneja la conexión.
- ¿Qué devuelve? Nada.


<!-- ----- "Add Item" ----- -->
# Botón "Add Item"
# División de la acción
- Clic -> Detail
- Manejo del clic -> Home
- Conexión con la API -> ./logic 

# Conexión con la API
Función deberá esperar un vehículo que se quiera añadir al carrito de compra y tendrá que preguntar a la API primero si este vehiculo ya está en el cart. Si no está tendrá que añadirlo, y en caso de que ya estuviese deberá sumar uno a la cantidad.
- Paso 1: obtener la info del usuario a cambio de un token.
- Paso 2: en esa información del usuario comprobar si hay artículos en el carrito. El usuario deberá tener una propiedad cart, que será un array de objetos, cada uno con dos keys, id y cantidad.
- Paso 3: si no existe propiedad cart en el usuario, crearla y añadir el vehículo en la posición 0.
- Paso 4: si existe propiedad cart, habrá que analizar todas las posiciones del array en busca del vehículo. Si está se añadirá uno a la cantidad, y si no estaba se añadirá al array.
- Paso 5: actualizar en la API la información del usuario con la nueva propiedad cart.
- Paso 6: la función devuelve si se ha añadido el artículo.

# Manejo de la conexión 
Función encargada de llamar a la función que conecta con la API y manejar la respuesta recibida por esta.
- ¿Qué necesita recibir? El token del usuario y el id del vehiculo que se quiere añadir al cart.
- ¿Qué maneja? El error, si lo hay, y si no, si se ha añadido el artículo.
- ¿Qué devuelve? Nada.

# Manejo del clic
Función encargada de recoger el clic del usuario y el id del vehículo en el que se ha hecho ese clic, y entonces llamar a la función que maneja la conexión.
- ¿Qué necesita recibir? El id del vehículo.
- ¿Qué maneja? Llama a la función que maneja la conexión.
- ¿Qué devuelve? Nada.


<!-- ----- "Remove Item" ----- -->
# Botón "Remove Item"
# División de la acción
- Clic -> Detail
- Manejo del clic -> Home
- Conexión con la API -> ./logic 

# Conexión con la API
Función deberá esperar un vehículo que se quiera añadir al carrito de compra y tendrá que preguntar a la API primero si este vehiculo ya está en el cart. Si no está tendrá que añadirlo, y en caso de que ya estuviese deberá sumar uno a la cantidad.
- Paso 1: obtener la info del usuario a cambio de un token.
- Paso 2: en esa información del usuario comprobar si hay artículos en el carrito. El usuario deberá tener una propiedad cart, que será un array de objetos, cada uno con dos keys, id y cantidad.
- Paso 3: si no existe propiedad cart en el usuario, crearla y añadir el vehículo en la posición 0.
- Paso 4: si existe propiedad cart, habrá que analizar todas las posiciones del array en busca del vehículo. Si está se añadirá uno a la cantidad, y si no estaba se añadirá al array.
- Paso 5: actualizar en la API la información del usuario con la nueva propiedad cart.
- Paso 6: la función devuelve si se ha añadido el artículo.

# Manejo de la conexión 
Función encargada de llamar a la función que conecta con la API y manejar la respuesta recibida por esta.
- ¿Qué necesita recibir? El token del usuario y el id del vehiculo que se quiere añadir al cart.
- ¿Qué maneja? El error, si lo hay, y si no, si se ha añadido el artículo.
- ¿Qué devuelve? Nada.

# Manejo del clic
Función encargada de recoger el clic del usuario y el id del vehículo en el que se ha hecho ese clic, y entonces llamar a la función que maneja la conexión.
- ¿Qué necesita recibir? El id del vehículo.
- ¿Qué maneja? Llama a la función que maneja la conexión.
- ¿Qué devuelve? Nada.


<!-- ----- "Remove from Cart" ----- -->
# Botón "Proceed to Pay"
# División de la acción
- Clic -> Detail
- Manejo del clic -> Home
- Conexión con la API -> ./logic 

# Conexión con la API
Función deberá esperar un vehículo que se quiera añadir al carrito de compra y tendrá que preguntar a la API primero si este vehiculo ya está en el cart. Si no está tendrá que añadirlo, y en caso de que ya estuviese deberá sumar uno a la cantidad.
- Paso 1: obtener la info del usuario a cambio de un token.
- Paso 2: en esa información del usuario comprobar si hay artículos en el carrito. El usuario deberá tener una propiedad cart, que será un array de objetos, cada uno con dos keys, id y cantidad.
- Paso 3: si no existe propiedad cart en el usuario, crearla y añadir el vehículo en la posición 0.
- Paso 4: si existe propiedad cart, habrá que analizar todas las posiciones del array en busca del vehículo. Si está se añadirá uno a la cantidad, y si no estaba se añadirá al array.
- Paso 5: actualizar en la API la información del usuario con la nueva propiedad cart.
- Paso 6: la función devuelve si se ha añadido el artículo.

# Manejo de la conexión 
Función encargada de llamar a la función que conecta con la API y manejar la respuesta recibida por esta.
- ¿Qué necesita recibir? El token del usuario y el id del vehiculo que se quiere añadir al cart.
- ¿Qué maneja? El error, si lo hay, y si no, si se ha añadido el artículo.
- ¿Qué devuelve? Nada.

# Manejo del clic
Función encargada de recoger el clic del usuario y el id del vehículo en el que se ha hecho ese clic, y entonces llamar a la función que maneja la conexión.
- ¿Qué necesita recibir? El id del vehículo.
- ¿Qué maneja? Llama a la función que maneja la conexión.
- ¿Qué devuelve? Nada.


<!-- ----- "Proceed to Pay" ----- -->
# Botón "Add to Cart"
# División de la acción
- Clic -> Detail
- Manejo del clic -> Home
- Conexión con la API -> ./logic 

# Conexión con la API
Función deberá esperar un vehículo que se quiera añadir al carrito de compra y tendrá que preguntar a la API primero si este vehiculo ya está en el cart. Si no está tendrá que añadirlo, y en caso de que ya estuviese deberá sumar uno a la cantidad.
- Paso 1: obtener la info del usuario a cambio de un token.
- Paso 2: en esa información del usuario comprobar si hay artículos en el carrito. El usuario deberá tener una propiedad cart, que será un array de objetos, cada uno con dos keys, id y cantidad.
- Paso 3: si no existe propiedad cart en el usuario, crearla y añadir el vehículo en la posición 0.
- Paso 4: si existe propiedad cart, habrá que analizar todas las posiciones del array en busca del vehículo. Si está se añadirá uno a la cantidad, y si no estaba se añadirá al array.
- Paso 5: actualizar en la API la información del usuario con la nueva propiedad cart.
- Paso 6: la función devuelve si se ha añadido el artículo.

# Manejo de la conexión 
Función encargada de llamar a la función que conecta con la API y manejar la respuesta recibida por esta.
- ¿Qué necesita recibir? El token del usuario y el id del vehiculo que se quiere añadir al cart.
- ¿Qué maneja? El error, si lo hay, y si no, si se ha añadido el artículo.
- ¿Qué devuelve? Nada.

# Manejo del clic
Función encargada de recoger el clic del usuario y el id del vehículo en el que se ha hecho ese clic, y entonces llamar a la función que maneja la conexión.
- ¿Qué necesita recibir? El id del vehículo.
- ¿Qué maneja? Llama a la función que maneja la conexión.
- ¿Qué devuelve? Nada.