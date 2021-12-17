const { modifyUser } = require('inmymind-logic')
const {handleError, extractUserIdFromToken }= require('./helpers')


module.exports = (req, res) => {
    const { body: data } = req

        try {
            const id = extractUserIdFromToken(req)
            
            modifyUser(id, data)
                .then(() => {res.status(204).send()})
                .catch(error => handleError(error, res))
        } catch (error) {
            handleError(error, res)
        }
}