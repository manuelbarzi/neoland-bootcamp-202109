const { unregisterUser } = require('inmymind-logic')
const {handleError, extractUserIdFromToken} = require('./helpers')


module.exports = (req, res) => {
    const {body: { password } } = req

    try {
        const id = extractUserIdFromToken(req)

        unregisterUser(id, password)
            .then(() => res.status(201).send())
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}