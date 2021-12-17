const { models: { Disorder } } = require('inmymind-data');
const { NotFoundError } = require('inmymind-errors');
const { validateId, validateDate } = require('./helpers/validators')


const retrieveDisorder = (user_id, date) => {
    validateId(user_id)

    let filter = { user_id: user_id };

    if (date) {
        validateDate(date)

        const day = (date.getDate() < 10 ? '0' : '') + date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        const dateFormat = year + '-' + month + '-' + day

        filter = { user_id: user_id, date: dateFormat };
    }
    // async await

    return (async () => {
        const disorder = await Disorder.find(filter).sort({ date: -1 }).lean()

        if (!disorder) throw new NotFoundError(`disorder with id ${id} not found`)

        for (let index = 0; index < disorder.length; index++) {

            delete disorder[index]._id
            delete disorder[index].user_id
            delete disorder[index].__v
            
        }
        return disorder
    })()
}

module.exports = retrieveDisorder