const { registerUser } = require('mynutrition-logic')
const handleError = require('./helpers/handle-error')

module.exports = (req, res) => {
    const { body: { role, name, username, password } } = req

    try {
        registerUser(role, name, username, password)
            .then(() => res.status(201).send())
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}