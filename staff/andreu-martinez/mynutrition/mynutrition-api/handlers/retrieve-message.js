const { retrieveMessage } = require('mynutrition-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {

    const { headers: { authorization }, params: { id: messageId }  } = req

    try {

        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        const messageList = await retrieveMessage(messageId)
        res.json(messageList)
            
    } catch (error) {
        handleError(error, res)
    }
}