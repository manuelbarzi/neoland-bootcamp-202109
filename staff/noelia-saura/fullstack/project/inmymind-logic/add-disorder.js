const { validateId, validateDate, validateString, validateNumber, validateBoolean } = require('./helpers/validators')
const { models: { Disorder } } = require('inmymind-data')


const addDisorder = (
    date,
    user_id,
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
    causedstate) => {

    validateId(user_id)
    validateDate(date)
    validateString(symptom)
    validateString(whichinitiatives)
    validateString(whichworried)
    validateString(causedstate)
    validateNumber(relax)
    validateNumber(breathe)
    validateNumber(initiatives)
    validateNumber(overreaction)
    validateNumber(tremblehands)
    validateNumber(paralyzed)
    validateNumber(nerves)
    validateNumber(worried)
    validateNumber(live)
    validateNumber(sad)
    validateNumber(verysleep)
    validateNumber(panic)
    validateNumber(enthuse)
    validateNumber(value)
    validateNumber(irritable)
    validateNumber(afraid)
    validateNumber(overthinking)
    validateBoolean(negativestate)

    return (async () => {
        const disorder = await Disorder.create({
            date,
            user_id,
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
            causedstate
        })
        if(!disorder) throw error
    })()
}

module.exports = addDisorder