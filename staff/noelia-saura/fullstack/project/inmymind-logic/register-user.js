const { validateName, validateUsername, validatePassword} = require('./helpers/validators')
const { ConflictError} = require('inmymind-errors')
const { models: { User } } = require('inmymind-data')
const bcrypt = require('bcryptjs')

/**
 * 
 * @param {string} name user's name
 * @param {string} username user's username
 * @param {string} password user's password

 * 
 * @returns successful registration
 *  
 * @throws {TypeError}
 * @throws {FormatError}
 * @throws {ConflictError}
 */
function registerUser(name, username, password){
    validateName(name)
    validateUsername(username)
    validatePassword(password)
    
    
    return (async()=>{
        try{
            await User.create({ name, username, password: bcrypt.hashSync(password)})
        
        }catch(error){
            if (error.code === 11000)
            throw new ConflictError(`user with username ${username} already exists`)

        throw error
        }
    })()
}

module.exports = registerUser