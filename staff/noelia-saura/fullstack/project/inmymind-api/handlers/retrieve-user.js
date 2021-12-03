const { retrieveUser } = require('inmymind-logic')
const { handleError} = require('./helpers')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process

module.exports = (req, res) => {
    const { headers: { authorization } } = req

    try {
        const [, token] = authorization.split(' ')

        const payload = jwt.verify(token, SECRET)

        const { sub: id } = payload

        retrieveUser(id)
            .then(user => res.json(user))
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}


