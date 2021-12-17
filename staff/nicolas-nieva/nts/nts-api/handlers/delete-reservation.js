const { deleteReservation } = require('./../../nts-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {

    const { headers: { authorization }, body: { reservationId } } = req
    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        await deleteReservation(id, reservationId)
        res.status(201).send()

    } catch (error) {
        handleError(error, res)
    }
}