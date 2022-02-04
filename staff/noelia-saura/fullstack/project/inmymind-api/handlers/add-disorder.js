const { addDisorder } = require('inmymind-logic')
const { handleError, extractUserIdFromToken } = require('./helpers')

module.exports = (req, res) => {
    const {body: {
        date,
        symptom,
        relax,
        negativestate,
        breathe,
        initiatives,
        whichinitiatives,
        overreaction,
        tremblehands,
        paralyzed,
        nerves,
        worried,
        whichworried,
        live,
        sad,
        verysleep,
        panic,
        enthuse,
        value,
        irritable,
        afraid,
        overthinking,
        causedstate } } = req
    try {
        const id = extractUserIdFromToken(req)
        
        addDisorder(
            new Date(date),
            id,
            symptom,
            relax,
            negativestate,
            breathe,
            initiatives,
            whichinitiatives,
            overreaction,
            tremblehands,
            paralyzed,
            nerves,
            worried,
            whichworried,
            live,
            sad,
            verysleep,
            panic,
            enthuse,
            value,
            irritable,
            afraid,
            overthinking,
            causedstate)
            .then(() => res.status(201).send())
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}
