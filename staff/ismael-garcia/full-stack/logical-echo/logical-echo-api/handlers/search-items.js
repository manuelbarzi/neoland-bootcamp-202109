const { searchItems } = require('logical-echo-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {
    const { headers: { authorization }, query: { q } } = req

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        const items = await searchItems(id, q)

        res.json(items)
        
    } catch (error) {
        handleError(error, res)
    }
}