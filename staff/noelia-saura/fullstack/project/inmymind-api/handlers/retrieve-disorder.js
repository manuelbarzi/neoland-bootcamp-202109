const { retrieveDisorder } = require('inmymind-logic')
const { handleError,extractUserIdFromToken} = require('./helpers')


module.exports = (req, res) => {
    const { headers: { authorization } } = req

    try {

        const date = req.query.date

        const id = extractUserIdFromToken(req)

        const user_id = id

        const dateFormat = ''

        if (date) {
            dateFormat = new Date(date)
        }
        
        retrieveDisorder(user_id, dateFormat)
            .then(note => res.json(note))
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}
