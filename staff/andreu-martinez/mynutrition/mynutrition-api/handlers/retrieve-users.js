const { retrieveUsers } = require('mynutrition-logic')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process
const handleError = require('./helpers/handle-error')

module.exports = (req, res) => {
    const { headers: { authorization } } = req

    try {
        const [, token] = authorization.split(' ')

        const payload = jwt.verify(token, SECRET)

        const { sub: id } = payload

        retrieveUsers(id)
            .then(user => res.json(user))
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}