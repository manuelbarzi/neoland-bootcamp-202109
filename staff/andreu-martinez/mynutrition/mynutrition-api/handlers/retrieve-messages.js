const { retrieveMessages } = require('mynutrition-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = (req, res) => {

    const { headers: { authorization } } = req
    
    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        retrieveMessages(id)
            .then(messageList => res.json(messageList))
            .catch (error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}