const { retrieveFavItems } = require('logical-echo-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {
    const { headers: { authorization } } = req

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        const items = await retrieveFavItems(id)

        req.redis.set(token, JSON.stringify(favs), "EX", 21600)

        res.json(items)
    } catch (error) {
        handleError(error, res)
    }
}