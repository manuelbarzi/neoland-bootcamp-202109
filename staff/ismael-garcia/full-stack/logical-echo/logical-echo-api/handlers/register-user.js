const { registerUser } = require('logical-echo-logic')
const { handleError } = require('./helpers')

module.exports = async (req, res) => {
    const { body: { email, password } } = req 

    try {
        await registerUser(email, password)
        
        res.status(201).send()

    } catch (error) {
        handleError(error, res)
    }
}