const { retrieveMessageById } = require('mynutrition-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {

    const { headers: { authorization }, query: { q }  } = req

    try {

        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        const messageList = await retrieveMessageById(q)
        res.json(messageList)
            
    } catch (error) {
        handleError(error, res)
    }
}