const { validateId, validateData } = require('./helpers/validators')
const { ConflictError } = require('mynutrition-errors')
const { models: { User } } = require('mynutrition-data')

function findUserById(id, data) {
    validateId(id)
    validateData(data)

    return (async () => {
        try {
            const { id } = data
            debugger
            await User.findOne({ id })
        } catch (error) {
            if (error.code === 11000)
                throw new NotFoundError(`User with id ${id} not found`)

            throw error
        }
    })() // IIFE
}

module.exports = findUserById