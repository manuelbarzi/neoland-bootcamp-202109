const { unregisterUser } = require('crowdaids-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {
    const { headers: { authorization }, body: { password } } = req

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        await unregisterUser(id, password)

        res.status(200).send()
    } catch (error) {
        handleError(error, res)
    }
}