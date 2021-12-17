const { validateId, validateDate, validateString, validateNumber, validateBoolean } = require('./helpers/validators')
const { models: { Diary } } = require('inmymind-data')


const addDiary=(
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
    timetostreet) => {
   
    validateDate(date)
    validateId(user_id)
    validateString(emotional)
    validateNumber(timesleep)
    validateString(timetowakeup)
    validateString(timetostreet)
    validateNumber(qualitysleep)
    validateBoolean(hydrate)
    validateNumber(quantityhydrate)
    validateBoolean(exercise)
    validateBoolean(meditation)
    validateBoolean(earlywakeup)
    validateBoolean(makethebed)
    validateBoolean(cleanface)
    validateBoolean(cleanteeth)
    validateBoolean(shower)
    validateBoolean(order)
    validateBoolean(cleanhouse)
    validateBoolean(changesheets)
    validateBoolean(cooking)
    validateBoolean(gotostreet)

    return(async()=>{
        const diary=await Diary.create({
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
        })
        if(!diary) throw error

        return diary.id
    })()
    
}

module.exports = addDiary