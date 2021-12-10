const { addDiary } = require('inmymind-logic')
const { handleError } = require('./helpers')

module.exports = (req, res) => {
    const { body: {
        date,
        user_id,
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
        addDiary(
            new Date(date),
            user_id,
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

