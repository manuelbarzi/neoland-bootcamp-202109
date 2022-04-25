const { retrieveFavItems } = require('logical-echo-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {
    const { headers: { authorization }, ids: { favs } } = req

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        const items = await retrieveFavItems(favs)

        await req.redis.set(id, JSON.stringify(favs), "EX", 21600)

        res.json(items)
    } catch (error) {
        handleError(error, res)
    }
}