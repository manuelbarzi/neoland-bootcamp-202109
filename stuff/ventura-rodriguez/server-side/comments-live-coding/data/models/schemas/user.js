// Schema lo podéis entender como la forma en la cuál se organizan
// los datos en un documento de una determinada colección
// Los esquemas se utilizan para instanciar modelos
// Definen qué campos y de qué tipo son esos campos
// Permiten validaciones propias
const { Schema } = require('mongoose')

// Guardamos el schema en un contenedor llamado user
const user = new Schema({
    name: { // Este es el campo name será obligatorio y será de tipo String
        type: String,
        required: true
    },
    username: { // Este es el campo username que será único, obligatorio y de tipo string, además tiene 2 validaciones personalizadas
        type: String,
        required: true, // esto son validaciones por defecto, si no se cumplen se mandará un mesaje de error por defecto
        unique: true,
        validate: [
            {
                validator(username) { // este parámetro va a ser el valor que se ponga como clave de username y se validará antes de ponerlo
                    return username.length > 3 // Este return siempre devolverá un valor booleano
                    // Si return es true permitirá seguir con la operación y si no mandará el mensaje de error
                },
                message: 'username too short' // Este es el mensaje de error que se lanzará (throw error) en caso de que `return false`
            },
            {
                validator(username) {
                    return !username.includes(' ')
                },
                message: 'username has white spaces'
            }
        ]
    },
    password: {
        type: String,
        required: true,
        validate: [
            {
                validator(password) {
                    return password.length > 6
                },
                message: 'password too short'
            },
            {
                validator(password) {
                    return !password.includes(' ')
                },
                message: 'password has white spaces'
            }
        ]
    }
})

module.exports = user


// Por qué usamos esquemas??
// Nos permite validar campos y tipos de datos.
// Nos dan una estructura fija, permitiendo una mayor integridad de nuestras coleciones (pero sin llegar a proporcionar integridad de datos)