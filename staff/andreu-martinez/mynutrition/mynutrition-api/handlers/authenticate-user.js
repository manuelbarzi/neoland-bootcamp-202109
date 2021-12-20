const { authenticateUser } = require('mynutrition-logic')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process
const handleError = require('./helpers/handle-error')

module.exports = (req, res) => {
    const { body: { username, password } } = req
debugger
    try {
        authenticateUser(username, password)
            .then(id => {
                const token = jwt.sign({ sub: id, exp: Math.floor(Date.now() / 1000) + 360000 }, SECRET)

                res.json({ token })
            })
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}