const { retrieveTreatment } = require('inmymind-logic')
const { handleError,extractUserIdFromToken} = require('./helpers')


module.exports = (req, res) => {
     try {

        const date = req.query.date

        const id = extractUserIdFromToken(req)

        const user_id = id

        let dateFormat = ''

        if (date) {
            dateFormat = new Date(date)
        }
       
        retrieveTreatment(user_id, dateFormat)
            .then(treatment => res.json(treatment))
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}
