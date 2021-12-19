const { models: { User } } = require('logical-echo-data')
const { validateId, validateData } = require('./helpers/validators')
const { NotFoundError, ConflictError, CredentialsError } = require('logical-echo-errors')
const bcrypt = require('bcryptjs')

/**
 * TODO doc me
 * @param {*} id 
 * @param {*} data 
 */
function modifyUser(id, data) {
    validateId(id)
    validateData(data)

    return (async () => {
        try {
            const user = await User.findById(id).lean()
            
            if (!user) throw new NotFoundError(`user with id ${id} not found`)
            
            let { password } = data 
        
            if (!bcrypt.compareSync(password, user.password)) throw new CredentialsError('wrong password')
            
            if (data.newPassword) {
                password = data.newPassword 

                delete data.newPassword 
            }

            for (const key in data) {
                if (key === 'newPassword')
                    user[key] = bcrypt.hashSync(data[key])
                else
                    user[key] = data[key]        
            }
        
            await user.save()
        
        } catch (error) {
            if (error.code === 11000)
                throw new ConflictError(`user with email ${data.email} already exists`)
            
            throw error
        }
    })()
}

module.exports = modifyUser