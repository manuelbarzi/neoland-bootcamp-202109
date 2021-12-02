const { authenticateUser } = require('mynutrition-logic')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process
const handleError = require('./helpers/handle-error')

module.exports = (req, res) => {
    const { body: { username, password } } = req
    authenticateUser(username, password).then(id => {
        const token = jwt.sign({ sub: id, exp: Math.floor(Date.now() / 1000) + 3600 }, SECRET)
        res.json({ token })
    })
    .catch(err => {
        handleError(error, res)
    })
}