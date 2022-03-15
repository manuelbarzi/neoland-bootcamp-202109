const { registerClickedItem } = require('logical-echo-logic')
const { handleError } = require('./helpers')

module.exports = async (req, res) => {
    try {
        const url = window.location.href

        const date = new Date()

        await registerClickedItem(url, date)
        
        res.status(201).send()
    } catch (error) {
        handleError(error, res)
    }
}