const { retrievePlayedGames } = require('logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = (req, res) => {
    const { headers: { authorization } } = req

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        retrievePlayedGames(id)
            .then(favGames => res.json(favGames))
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}