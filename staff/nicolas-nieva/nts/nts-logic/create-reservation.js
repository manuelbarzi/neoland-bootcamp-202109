const { models: { Reservation }, mongoose: { Types: { ObjectId } } } = require('./../nts-data')
const bcrypt = require('bcryptjs')
const { checkIfUserExist } = require('./helpers/checkers')

function createReservation(userId, pax, quantity, product, from, until, status, agent, text) {
    // validateName(name)
    // validateUsername(username)
    // validatePassword(password)
    // validateMail(email)
    // validatePhone(phone)
    // // validateAddress(address)
    // validateProvince(province)
    // validateLocation(location)

    return (async () => {
        await checkIfUserExist(userId)

        const reservation = await Reservation.create({ agency: userId, pax, quantity, product, from, until, status, agent })

        if (text) {
            reservation.notes.push({ text, date: new Date })
        }

        await reservation.save()
    })()
}

module.exports = createReservation