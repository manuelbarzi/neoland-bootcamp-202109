const { FormatError, ConflictError } = require('customs-errors')
const { mongoose } = require('data')

function validateId(id) {
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (!id.trim().length) throw new FormatError('id is empty or blank')
    if (/\r?\n|\r|\t| /g.test(id)) throw new FormatError('id has blank spaces')
    if (!mongoose.isValidObjectId(id)) throw new FormatError('id is not valid')
}

function validateUsername(username) {
    if (typeof username !== 'string') throw new TypeError('username is not a string')
    if (!username.trim().length) throw new FormatError('username is empty or blank')
    if (/\r?\n|\r|\t| /g.test(username)) throw new FormatError('username has blank spaces')
    if (username.length < 4) throw new FormatError('username has less than 4 characters')
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('password is not a string')
    if (!password.trim().length) throw new FormatError('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(password)) throw new FormatError('password has blank spaces')
    if (password.length < 8) throw new FormatError('password has less than 8 characters')
}

function validateOldPassword(oldPassword) {
    if (typeof oldPassword !== 'string') throw new TypeError('old password is not a string')
    if (!oldPassword.trim().length) throw new FormatError('old password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(oldPassword)) throw new FormatError('old password has blank spaces')
    if (oldPassword.length < 8) throw new FormatError('old password has less than 8 characters')
}

function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (!name.trim().length) throw new FormatError('name is empty or blank')
    if (name.trim() !== name) throw new FormatError('blank spaces around name')
}

function validateData(data) {
    if (typeof data !== 'object' || data.constructor.name !== 'Object') throw new TypeError('data is not an object')

    const { name, username, password, oldPassword } = data

    if (typeof name !== 'undefined') {
        validateName(name)
    }

    if (typeof username !== 'undefined') {
        validateUsername(username)
    }

    if (typeof oldPassword === 'undefined' && typeof password !== 'undefined') throw new ConflictError('old password is not defined')
    if (typeof password === 'undefined' && typeof oldPassword !== 'undefined') throw new ConflictError('password is not defined')

    if (typeof password !== 'undefined') {
        validatePassword(password)
    }

    if (typeof oldPassword !== 'undefined') {
        validateOldPassword(oldPassword)
    }
}

function validateCallback(callback) {
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
}

// function validateDate(date) {
//     if (!(date instanceof Date)) throw new TypeError('date is not a date')
// }

function validateQuery(query) {
    if (typeof query !== 'string') throw new TypeError('query is not a string')
    if (!query.trim().length) throw new FormatError('query is empty or blank')
}

module.exports = {
    validateId,
    validateUsername,
    validatePassword,
    validateOldPassword,
    validateData,
    validateName,
    validateCallback,
    validateQuery
}