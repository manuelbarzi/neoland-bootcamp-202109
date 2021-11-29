const registerUser = require('./logic/register-user')
const retrieveUser = require('./logic/retrieve-user')
const modifyUser = require('./logic/modify-user')
const findUser = require('./logic/find-user')
const unregisterUser = require('./logic/unregister-user')
const authenticateUser = require('./logic/authenticate-user')
const context = require('./logic/context')

module.exports = {
    registerUser,
    retrieveUser,
    modifyUser,
    findUser,
    unregisterUser,
    authenticateUser,
    context
}