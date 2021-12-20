const { findUserById } = require('mynutrition-logic')
const handleError = require('./helpers/handle-error')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process

module.exports = (req, res) => {
    const { headers: { authorization }, body: {id} } = req

    try {

        const [, token] = authorization.split(' ')

        // const { sub: id } = jwt.verify(token, SECRET)

        findUserById(id)
            .then(() => res.status(201).send())
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}