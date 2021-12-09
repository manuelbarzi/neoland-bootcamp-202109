const { unregisterUser } = require('../logical-echo-logic')
// const jwt = require('jsonwebtoken')
// const { env: { SECRET } } = process
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {
    const { headers: { authorization }, body: password } = req 

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        await unregisterUser(id, password)
        
        res.status(204).send()
        
    } catch (error) {
        handleError(error, res)
    }
}