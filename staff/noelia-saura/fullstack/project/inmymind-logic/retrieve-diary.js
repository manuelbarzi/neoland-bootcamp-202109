const { models: { Diary } } = require('inmymind-data')
const { validateId, validateDate } = require('./helpers/validators')


function retrieveDiary(user_id, date) {
    validateId(user_id)
    validateDate(date)

    const day = (date.getDate() < 10 ? '0' : '') + date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const dateFormat = year + '-' + month + '-' + day

    return Diary.find({ user_id: user_id, date: dateFormat }).lean()
        .then(diary => {
            for (let index = 0; index < diary.length; index++) {

                delete diary[index]._id
                delete diary[index].user_id
                delete diary[index].__v

            }
            
            return diary
        })
}

module.exports = retrieveDiary