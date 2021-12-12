const { addDiary } = require('inmymind-logic')
const { handleError } = require('./helpers')
const jwt = require('jsonwebtoken')
const { env: { SECRET } } = process

module.exports = (req, res) => {
    const { headers: { authorization }, body: {
        date,
        emotional,
        timesleep,
        timetowakeup,
        qualitysleep,
        hydrate,
        quantityhydrate,
        exercise,
        meditation,
        earlywakeup,
        makethebed,
        cleanface,
        cleanteeth,
        shower,
        order,
        cleanhouse,
        changesheets,
        cooking,
        gotostreet,
        timetostreet
    } } = req

    try {

        
        const [, token] = authorization.split(' ')

        const payload = jwt.verify(token, SECRET)

        const { sub: id } = payload

        addDiary(
            new Date(date),
            id,
            emotional,
            timesleep,
            timetowakeup,
            qualitysleep,
            hydrate,
            quantityhydrate,
            exercise,
            meditation,
            earlywakeup,
            makethebed,
            cleanface,
            cleanteeth,
            shower,
            order,
            cleanhouse,
            changesheets,
            cooking,
            gotostreet,
            timetostreet
        )
            .then(() => res.status(201).send())
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}

