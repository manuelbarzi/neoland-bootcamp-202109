const { addNote } = require('inmymind-logic')
const { handleError, extractUserIdFromToken } = require('./helpers')

module.exports = (req, res) => {
    const { body: { content, date } } = req

    try {
        const id = extractUserIdFromToken(req)

        addNote(content, new Date(date), id)
            .then(() => res.status(201).send())
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}

