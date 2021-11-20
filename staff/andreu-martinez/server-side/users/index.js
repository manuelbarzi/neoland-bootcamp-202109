const registerUser = require('./logic/register-user')
const modifyUser = require('./logic/modify-user')
const retrieveUser = require('./logic/retrieve-user')
const authenticateUser = require('./logic/authenticate-user')

module.exports={
    registerUser,
    retrieveUser,
    modifyUser,
    authenticateUser
}