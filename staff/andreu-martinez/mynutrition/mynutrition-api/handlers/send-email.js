const { sendEmail } = require('mynutrition-logic')
const handleError = require('./helpers/handle-error')

module.exports = (req, res) => {
    const { body: { parentId, from, to, subject, body, date } } = req

    try {
        sendEmail(parentId, from, to, subject, body, date)
            .then(() => res.status(201).send())
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}