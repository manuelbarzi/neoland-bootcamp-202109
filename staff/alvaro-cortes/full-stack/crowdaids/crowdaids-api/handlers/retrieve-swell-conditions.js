const { retrieveSwellConditions } = require('crowdaids-logic')
const { handleError } = require('./helpers')

module.exports = async (req, res) => {
    const { query: { spotId } } = req

    try {
        const beach = await retrieveSwellConditions(spotId)

        res.json(beach)
    } catch (error) {
        handleError(error, res)
    }
}