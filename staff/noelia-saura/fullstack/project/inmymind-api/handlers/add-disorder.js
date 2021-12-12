const { addDisorder } = require('inmymind-logic')
const { handleError } = require('./helpers')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process
module.exports = (req, res) => {
    const { headers: { authorization }, body: {
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

        const [, token] = authorization.split(' ')

        const payload = jwt.verify(token, SECRET)

        const { sub: id } = payload
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
