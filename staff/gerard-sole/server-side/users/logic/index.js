const registerUser = require('./register-user')
const retrieveUser = require('./retrieve-user')
const modifyUser = require('./modify-user')
const findUser = require('./find-user')
const unregisterUser = require('./unregister-user')
const authenticateUser = require('./authenticate-user')
const context = require('./context')

module.exports = {
    registerUser,
    retrieveUser,
    modifyUser,
    findUser,
    unregisterUser,
    authenticateUser,
    context
}