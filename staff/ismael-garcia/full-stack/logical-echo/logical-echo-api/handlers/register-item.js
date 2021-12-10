const { registerItem } = require('logical-echo-logic')
const { handleError } = require('./helpers')

module.exports = async (req, res) => {
    const { body: item } = req 

    try {
        await registerItem(item)
        
        res.status(201).send()

    } catch (error) {
        handleError(error, res)
    }
}