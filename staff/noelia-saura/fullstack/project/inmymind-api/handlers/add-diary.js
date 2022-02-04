const { addDiary } = require('inmymind-logic')
const { handleError, extractUserIdFromToken } = require('./helpers')

module.exports = (req, res) => {
    const {body: {
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
        const id = extractUserIdFromToken(req)
        
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

