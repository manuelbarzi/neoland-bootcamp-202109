const { models: { User } } = require('../logical-echo-data')
const { validateId } = require('./helpers/validators')
const { NotFoundError } = require('../logical-echo-errors')

function retrieveUser(id) {
    validateId(id)

    return (async () => {
        const user = await User.findById(id).lean()
        
        if (!user) throw new NotFoundError(`user with id ${id} not found`)

        user.id = user._id.toString()
        delete user._id 

        delete user.password

        delete user.__v 

        return user
    })()
}

module.exports = retrieveUser