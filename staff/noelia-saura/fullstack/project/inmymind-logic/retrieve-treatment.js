const { models: { Treatment } } = require('inmymind-data')
const { validateId, validateDate } = require('./helpers/validators')


function retrieveTreatment(user_id, date) {
    validateId(user_id)
    validateDate(date)

    const day = (date.getDate() < 10 ? '0' : '') + date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const dateFormat = year + '-' + month + '-' + day

    return Treatment.find({ user_id: user_id, date: dateFormat }).lean()
        .then(treatment => {
            for (let index = 0; index < treatment.length; index++) {

                delete treatment[index]._id
                delete treatment[index].user_id
                delete treatment[index].__v

            }
            // treatment.id = treatment._id.toString()

            console.log(treatment,dateFormat,user_id)
            return treatment
        })
}

module.exports = retrieveTreatment