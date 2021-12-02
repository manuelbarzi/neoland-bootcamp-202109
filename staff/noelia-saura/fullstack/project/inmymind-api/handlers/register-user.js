const { registerUser } = require('inmymind-logic')
const { handleError } = require('./helpers')

module.exports = (req, res) => {
    const { body: { name, username, password, gender, age, email } } = req

    try {
        registerUser(name, username, password, gender, age, email)
            .then(() => res.status(201).send())
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}