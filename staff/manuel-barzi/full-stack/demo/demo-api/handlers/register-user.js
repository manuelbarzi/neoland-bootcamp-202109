const { registerUser } = require('demo-logic')
const { handleError } = require('./helpers')

module.exports = async (req, res) => {
    const { body: { name, username, password } } = req

    try {
        await registerUser(name, username, password)
        
        res.status(201).send()
    } catch (error) {
        handleError(error, res)
    }
}