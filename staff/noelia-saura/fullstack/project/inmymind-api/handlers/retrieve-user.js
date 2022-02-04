const { retrieveUser } = require('inmymind-logic')
const { handleError, extractUserIdFromToken} = require('./helpers')


module.exports = (req, res) => {
   

    try {
        const id = extractUserIdFromToken(req)

        retrieveUser(id)
            .then(user => res.json(user))
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}


