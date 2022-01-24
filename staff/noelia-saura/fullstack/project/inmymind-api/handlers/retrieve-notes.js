const { retrieveNotes } = require('inmymind-logic')
const { handleError, extractUserIdFromToken } = require('./helpers')


module.exports = (req, res) => {
    

    try {

        const date = req.query.date

        const id = extractUserIdFromToken(req)

        const user_id = id

        let dateFormat = ''

        if (date) {
            dateFormat = new Date(date)
        }

        retrieveNotes(user_id, dateFormat)
            .then(note => res.json(note))
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}
