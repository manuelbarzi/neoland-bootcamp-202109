const { setMessageToRead } = require('mynutrition-logic')
const jwt = require('jsonwebtoken')

const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {
    const { headers: { authorization }, body: data } = req

    try {

        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        const messageRead = await setMessageToRead(id, data)
        res.json(messageRead)
            
    } catch (error) {
        handleError(error, res)
    }
}