const { toggleFavBeach } = require('crowdaids-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {
    const { headers: { authorization }, params: { beachId } } = req

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        await toggleFavBeach(id, beachId)
        
        res.status(204).send()
    } catch (error) {
        handleError(error, res)
    }
}