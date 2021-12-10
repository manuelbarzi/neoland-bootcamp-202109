const { FormatError } = require('logical-echo-errors')

function validateId(id) {
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (!id.trim().length) throw new FormatError('id is empty or blank')
    if (/\r?\n|\r|\t| /g.test(id)) throw new FormatError('id has blank spaces')
    if (id.length !== 24) throw new FormatError('id does not have 24 characters')
}

function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('name is not a string')
    if (!name.trim().length) throw new FormatError('name is empty or blank')
    if (name.trim() !== name) throw new FormatError('blank spaces around name')
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

function validateNewPassword(newPassword) {
    if (typeof newPassword !== 'string') throw new TypeError('new password is not a string')
    if (!newPassword.trim().length) throw new FormatError('new password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(newPassword)) throw new FormatError('new password has blank spaces')
    if (newPassword.length < 8) throw new FormatError('new password has less than 8 characters')
}

function validateData(data) {
    if (typeof data !== 'object' || data.constructor.name !== 'Object') throw new TypeError('data is not an object')

    const { name, username, password, newPassword } = data

    validatePassword(password)

    if (typeof name !== 'undefined')
        validateName(name)

    if (typeof username !== 'undefined')
        validateUsername(username)

    if (typeof newPassword !== 'undefined')
        validateNewPassword(newPassword)
}

function validateCallback(callback) {
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
}

function validateString(string) {
    if (typeof string !== 'string') throw new TypeError(`${string} is not a string`)
    if (!string.trim().length) throw new FormatError('string is empty or blank')
}

function validateDate(date) {
    if (!(date instanceof Date)) throw new TypeError('date is not a date')
}

function validateArray(array) {
    if (!(array instanceof Array)) throw new TypeError(`${array} is not an array`)
}

function validateNumber(number) {
    if (typeof number !== 'number') throw new TypeError(`${number} is not a number`)
}

function validateItem(item) {
    if (typeof item !== 'object' || item.constructor.name !== 'Object') throw new TypeError('item is not an object')

    const { id, name, images, price, url, description, color } = item
    
    validateString(id)

    validateName(name)

    if (typeof images !== 'undefined')
        validateArray(images)

    if (typeof price !== 'undefined')
        validateString(price)

    validateArray(url)

    if (typeof description !== 'undefined')
        validateString(description)

    if (typeof color !== 'undefined')
        validateString(color)
}

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

module.exports = {
    validateId,
    validateName,
    validateUsername,
    validatePassword,
    validateNewPassword,
    validateData,
    validateCallback,
    validateString,
    validateDate,
    validateArray,
    validateNumber,
    validateItem,
    validateEmail
}