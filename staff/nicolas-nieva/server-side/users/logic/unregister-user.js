const { models: { User } } = require ('data')
const { NotFoundError, CredentialsError } = require('../../errors')
const { validateId, validatePassword} = require('./helpers/validators')

/**
 * Unregistering a user in the application.
 * 
 * @param {string} token The token to authenticate the retrieve user.
 * @param {Object} user The password of the user to be unregistered.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function unregisterUser(id, password){
    validateId(id)
    validatePassword(password)

    return User.findById(id) 
        .then (user => {
            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            if (user.password === password) {
               return user.delete(id)
               .then(()=> 'User deleted successfully') 
            } 
            else throw new CredentialsError ('Wrong password') 

        })    
}

module.exports = unregisterUser