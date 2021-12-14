const { validateId } = require('./helpers/validators')
const { NotFoundError } = require('eb-errors')
const { mongoose: { ObjectId }, models: { User } } = require('eb-data')

function retrieveUser(id) {
    validateId(id)

    return User.findById(id)
        .then(user => {
            if (!user) throw new NotFoundError('Wrong ID')

            user.id = user._id.toString()

            delete user._id

            delete user.password

            delete user.__v

            return user
        })
}

module.exports = retrieveUser