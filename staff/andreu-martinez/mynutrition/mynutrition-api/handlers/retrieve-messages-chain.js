const { retrieveMessagesChain } = require('mynutrition-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {

    const { headers: { authorization }, params: { id: messageId }  } = req

    try {

        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        const MessagesChain = await retrieveMessagesChain(messageId)
        res.json(MessagesChain)
            
    } catch (error) {
        handleError(error, res)
    }
}