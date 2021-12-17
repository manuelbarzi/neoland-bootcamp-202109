const { validateName, validateUsername, validatePassword, validateGender, validateAge, validateEmail} = require('./helpers/validators')
const { ConflictError } = require('inmymind-errors')
const { models: { User } } = require('inmymind-data')
const bcrypt = require('bcryptjs')


const registerUser = (name, username, password, gender, age, email) => {
    validateName(name)
    validateUsername(username)
    validatePassword(password)
    validateGender(gender)
    validateAge(parseInt(age))
    validateEmail(email)
    
    return (async ()=>{
        try{
            await User.create({ name, username, password: bcrypt.hashSync(password), gender, age, email })
        
        }catch(error){
            if (error.code === 11000)
            throw new ConflictError(`user with username ${username} already exists`)

        throw error
        }
    })()
}

module.exports = registerUser