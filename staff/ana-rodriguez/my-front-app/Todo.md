- Crea una nueva carpeta llamada components
- En esa carpeta crea 3 componentes tipo funcion llamadados Landing, Register, login

# Compo App
- Debe manejar las rutas con react router hacia los compos landing, login y register

# Funcionalidad landing
- Dar la bienvenida

- Debe poder navegar a register y login (<Link/>)


# Funcionalidad login
- Debe poder navegar a register (<Link/>)

- Debe contener un formulario con email y password y un botón de send


# Funcionalidad register
- Debe poder navegar a (<Link/>)

- Debe contener un formulario con name, username, email y password y un botón de send

### DONE ###


# Funcionalidad home
- Crea una home visualmente atractiva

- Debe tener una barra de navegación para ir a profile, y a searchVehicles

# Funcionalidad profile
- Debe contener 3 formularios, uno para cambiar los datos del usuario y otro para la contraseña y un último para
cerrar sesión o eliminar el usuario

- Se bede poder navegar a home de vuelta

# Funcionalidad searchVehicles
- Debe tener un buscador y se debe poder navegar de vuelta a home

# Visual
- Mejora la visual de tu app, estilos y que sea bonito


# Logic
- Crea la carpeta logic, dentro debe contener un index con los módulos de exportación que recopile todas las funciones
del módulo

- Genera los ficheros register, unregister, modify, change-password, auth, retrieve

# DONE!


# Logic

- Implementar la lógica de register POST `https://b00tc4mp.herokuapp.com/api/v2/user`
- Implementar la lógica de auth (autentificación) POST `https://b00tc4mp.herokuapp.com/api/v2/users/auth`
- Implementar la lógica de retrieve GET `https://b00tc4mp.herokuapp.com/api/v2/users`

- Implementarlo a través de la api de users de Manu


# Esquema de uso de logic

- Implementamos el logic

- Creamos la función en el componente padre que maneja la respuesta de este logic

- Creamos la función que maneja el lanzamiento de la funcionalidad (on submit)