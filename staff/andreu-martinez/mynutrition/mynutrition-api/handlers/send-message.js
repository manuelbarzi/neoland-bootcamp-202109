const { sendMessage } = require('mynutrition-logic')
const handleError = require('./helpers/handle-error')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process

module.exports = (req, res) => {
    const { 
        headers: { authorization },
        body: { parentId, to, subject, body, newDate } } = req

    try {

        const [, token] = authorization.split(' ')

        const payload = jwt.verify(token, SECRET)

        const { sub: id } = payload

        sendMessage(parentId, id, to , subject, body, newDate)
            .then(() => res.status(201).send())
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}