const { retrieveUser } = require('logical-echo-logic')
// const jwt = require('jsonwebtoken')
// const { env: { SECRET } } = process
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {
    const { headers: { authorization } } = req 

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        const user = await retrieveUser(id)

        res.json(user)

    } catch (error) {
        handleError(error, res)
    }
}