const { retrieveReservations } = require('../../nts-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require ('./helpers')

module.exports = async (req, res) => {

    const { headers: { authorization }, params : { reservation} } = req

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload (authorization)

        const reservation1 = await retrieveReservations (id)

        res.json(reservation1)

    } catch (error) {
        handleError (error, res)
    }
}