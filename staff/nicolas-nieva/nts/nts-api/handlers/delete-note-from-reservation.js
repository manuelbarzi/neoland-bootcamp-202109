const { deleteNoteFromReservation } = require('./../../nts-logic')
const { handleError, validateAuthorizationAndExtractPayload } = require('./helpers')

module.exports = async (req, res) => {

    const { headers: { authorization }, body: { reservationId, noteId } } = req

    try {
        const { sub: id } = validateAuthorizationAndExtractPayload(authorization)

        await deleteNoteFromReservation (id, reservationId, noteId)
            res.status(201).send()
           
    } catch (error) {
        handleError(error, res)
    }
}