const { FormatError, ConflictError } = require('inmymind-errors')

function validateId(id) {
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (!id.trim().length) throw new FormatError('id is empty or blank')
    if (/\r?\n|\r|\t| /g.test(id)) throw new FormatError('id has blank spaces')
    if (id.length !== 24) throw new FormatError('id doesn\'t have 24 characters')
}

function validateUsername(username) {
    if (typeof username !== 'string') throw new TypeError('username is not a string')
    if (!username.trim().length) throw new FormatError('username is empty or blank')
    if (/\r?\n|\r|\t| /g.test(username)) throw new FormatError('username has blank spaces')
    if (username.length < 4) throw new FormatError('username has less than 4 characters')
}

function validateGender(gender){
    if (typeof gender !== 'string') throw new TypeError('gender is not a string')
    if (!gender.trim().length) throw new FormatError('gender is empty or blank')
    if (/\r?\n|\r|\t| /g.test(gender)) throw new FormatError('gender has blank spaces')
    if (gender.length < 4) throw new FormatError('gender has less than 4 characters')
}

function validateAge(age){
    if (typeof age !== 'number') throw new TypeError('age is not a number')
    if (/\r?\n|\r|\t| /g.test(age)) throw new FormatError('age has blank spaces')
}

function validateEmail(email){
    if(typeof email !== 'string') throw new TypeError(email +'is not a string')
    if(!email.trim().length) throw new Error ('email is empty or blank')
    if(/\r?\n|\r|\t| /g.test(email))throw new Error('email has blank spaces')
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error(email + ' is not an e-mail')
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

function validateNote(note) {
    if (typeof note !== 'string') throw new TypeError('note is not a string')
    if (!note.trim().length) throw new FormatError('note is empty or blank')
}

function validateTreatment(treatment){
    if (typeof treatment !== 'string') throw new TypeError('treatment is not a string')
    if (!treatment.trim().length) throw new FormatError('treatment is empty or blank')
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

function validateDate(date) {
    if (!(date instanceof Date)) throw new TypeError('date is not a date')
} 

function validateString(string) {
    if (typeof string !== 'string') throw new TypeError(`${string} is not a string`)
    if (!string.trim().length) throw new FormatError('string is empty or blank')
}

function validateNumber(number) {
    if (typeof number !== 'number') throw new TypeError(`${number} is not a number`)
}

module.exports = {
    validateId,
    validateUsername,
    validatePassword,
    validateOldPassword,
    validateData,
    validateName,
    validateCallback,
    validateDate,
    validateString,
    validateNumber,
    validateGender,
    validateAge,
    validateEmail,
    validateNote,
    validateTreatment
}