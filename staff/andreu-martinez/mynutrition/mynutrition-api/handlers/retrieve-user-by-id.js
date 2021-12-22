const { retrieveUserById } = require('mynutrition-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {

    const { headers: { authorization }, query: { q } } = req

    try {

        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        const user = await retrieveUserById(q)
        res.json(user)
            
    } catch (error) {
        handleError(error, res)
    }
}