const { validateId, validateDate, validateString, validateNumber, validateBoolean } = require('./helpers/validators')
const { models: { Diary } } = require('inmymind-data')

/**
 * 
 * @param {date} date Date when occurs this diary
 * @param {string} user_id
 * @param {string} emotional 
 * @param {number} timesleep 
 * @param {string} timetowakeup 
 * @param {number} qualitysleep 
 * @param {boolean} hydrate 
 * @param {number} quantityhydrate 
 * @param {boolean} exercise 
 * @param {boolean} meditation 
 * @param {boolean} earlywakeup 
 * @param {boolean} makethebed 
 * @param {boolean} cleanface 
 * @param {boolean} cleanteeth 
 * @param {boolean} shower 
 * @param {boolean} order 
 * @param {boolean} cleanhouse 
 * @param {boolean} changesheets 
 * @param {boolean} cooking 
 * @param {boolean} gotostreet 
 * @param {string} timetostreet Hours
 * 
 * @returns {Promise<undefined>}
 * 
 * @throws {TypeError}
 * @throws {FormatError}
 */

const addDiary= (
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
    })()
    
}

module.exports = addDiary