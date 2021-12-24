const { retrieveUsers } = require('mynutrition-logic')
const { validateAuthorizationAndExtractPayload, handleError } = require('./helpers')

module.exports = async (req, res) => {

    const { headers: { authorization } } = req

    try {
        debugger
        validateAuthorizationAndExtractPayload(authorization)

        const usersList = await retrieveUsers()
        res.status(200).json(usersList)

    } catch (error) {
        handleError(error, res)
    }
}