const { validateName, validateUsername, validatePassword, validateCallback } = require('./helpers/validators')
const { ConflictError } = require('errors')
const { models: { User } } = require('data')

/**
 * TODO doc me
 * @param {*} name 
 * @param {*} username 
 * @param {*} password 
 * @param {*} callback 
 */
function registerUser(name, username, password) {
    // Las validaciones son para no cargar el servidor con llamadas cosatosas si ya podemos detectar problemas
    validateName(name)
    validateUsername(username)
    validatePassword(password)
    // Las validacioes sel Schema son validaciones que se pasan cuando el dato es totalmente inmutable.
    // Por lo que realmente son las que controlan la seguirdad de nuestra BBDD

    // este return es para poder concatenar los then de register-user en handlers
    return User.create({ name, username: username, password }) // Esta función llama y conecta a la BBDD con una promesa
        .then(() => { return "Todo ok"}) // Este sería el return de la promesa
        .catch(error => { // Sería el capturador de errores asíncronos o de conexión al logic de users (validaciones del Schema)
            if (error.code === 11000)
                throw new ConflictError(`user with username ${username} already exists`)

            throw error
        })
}

module.exports = registerUser

// Este fichero devuelve la lógica de cómo se crea el usuario y responde si se ha creado bien o mal