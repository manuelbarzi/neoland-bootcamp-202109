const { unregisterUser } = require('mynutrition-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {

    const { headers: { authorization }, body: { password }} = req
    debugger
    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        await unregisterUser(id, password)

        res.status(200).send()
    } catch (error) {
        handleError(error, res)
    }
}