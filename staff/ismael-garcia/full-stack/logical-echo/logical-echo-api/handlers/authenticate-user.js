const { authenticateUser } = require('logical-echo-logic')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process
const { handleError } = require('./helpers')

module.exports = async (req, res) => {
    const { body: { email, password } } = req 

    try {
        const id = await authenticateUser(email, password)

        const token = jwt.sign({ sub: id, exp: Math.floor(Date.now() / 1000) + 3600 }, SECRET )

        res.json({ token })

    } catch (error) {
        handleError(error, res)
    }
}