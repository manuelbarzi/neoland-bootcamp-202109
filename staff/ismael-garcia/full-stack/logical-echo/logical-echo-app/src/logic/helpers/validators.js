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

function validateToken(token) {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')
}

function validateQuery(query) {
    if (typeof query !== 'string') throw new TypeError(`${query} is not a string`)
}

function validateData(data) {
    if (typeof data !== 'object' || data.constructor.name !== 'Object') throw new TypeError('data is not an object')

    const { newEmail, password, newPassword } = data

    validatePassword(password)

    if (typeof newEmail !== 'undefined')
        validateEmail(newEmail)

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

function validateItemId(itemId) {
    if (typeof itemId !== 'string') throw new TypeError('id is not a string')
    if (!itemId.trim().length) throw new FormatError('id is empty or blank')
    if (/\r?\n|\r|\t| /g.test(itemId)) throw new FormatError('id has blank spaces')
}

function validateStore(store) {
    if (typeof store !== 'string') throw new TypeError('store is not a string')
    if (!store.trim().length) throw new FormatError('store is empty or blank')
    if (store.trim() !== store) throw new FormatError('blank spaces around store')
}

function validatePattern(pattern) {
    if (typeof pattern !== 'string') throw new TypeError('pattern is not a string')
    if (!pattern.trim().length) throw new FormatError('pattern is empty or blank')
    if (pattern.trim() !== pattern) throw new FormatError('blank spaces around pattern')
}

function validatePrice(price) {
    if (typeof price !== 'string') throw new TypeError('price is not a string')
    if (!price.trim().length) throw new FormatError('price is empty or blank')
    if (price.trim() !== price) throw new FormatError('blank spaces around price')
}

function validateUrl(url) {
    if (typeof url !== 'string') throw new TypeError('url is not a string')
    if (!url.trim().length) throw new FormatError('url is empty or blank')
    if (url.trim() !== url) throw new FormatError('blank spaces around url')
}

function validateDescription(description) {
    if (typeof description !== 'string') throw new TypeError('description is not a string')
    if (!description.trim().length) throw new FormatError('description is empty or blank')
    if (description.trim() !== description) throw new FormatError('blank spaces around description')
}

function validateDate(date) {
    if (!(date instanceof Date)) throw new TypeError('date is not a date')
}

function validateArray(array) {
    if (!(array instanceof Array)) throw new TypeError(`${array} is not an array`)
}

function validateImages(images) {
    if (!(images instanceof Array)) throw new TypeError('images is not an array')
    if (!images.length) throw new FormatError('images is empty or blank')
}

function validateColors(colors) {
    if (!(colors instanceof Array)) throw new TypeError('colors is not an array')
    if (!colors.length) throw new FormatError('colors is empty or blank')
}

function validateNumber(number) {
    if (typeof number !== 'number') throw new TypeError(`${number} is not a number`)
}

function validateItem(item) {
    if (typeof item !== 'object' || item.constructor.name !== 'Object') throw new TypeError('item is not an object')

    const { id, store, pattern, name, images, price, url, description, colors } = item
    
    validateItemId(id)

    validateStore(store)

    validatePattern(pattern)

    validateName(name)

    if (typeof images !== 'undefined')
        validateImages(images)

    if (typeof price !== 'undefined')
        validatePrice(price)

    validateUrl(url)

    if (typeof description !== 'undefined')
        validateDescription(description)

    if (typeof colors !== 'undefined')
        validateColors(colors)
}

function validateEmail(email) {
    return String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

module.exports = {
    validateId,
    validateName,
    validatePassword,
    validateNewPassword,
    validateQuery,
    validateToken,
    validateData,
    validateCallback,
    validateString,
    validateDate,
    validateArray,
    validateNumber,
    validateItem,
    validateEmail,
    validateItemId,
    validateImages,
    validatePrice,
    validateUrl,
    validateDescription,
    validateColors,
    validateStore,
    validatePattern
}