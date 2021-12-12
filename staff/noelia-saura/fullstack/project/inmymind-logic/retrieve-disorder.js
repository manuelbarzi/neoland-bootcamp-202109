const { models: { Disorder } } = require('inmymind-data')
const { validateId, validateDate } = require('./helpers/validators')


function retrieveDisorder(user_id, date) {
    validateId(user_id)
    validateDate(date)

    const day = (date.getDate() < 10 ? '0' : '') + date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const dateFormat = year + '-' + month + '-' + day

    return Disorder.find({ user_id: user_id, date: dateFormat }).lean()
        .then(disorder => {
            for (let index = 0; index < disorder.length; index++) {

                delete disorder[index]._id
                delete disorder[index].user_id
                delete disorder[index].__v

            }
            
            return disorder
        })
}

module.exports = retrieveDisorder