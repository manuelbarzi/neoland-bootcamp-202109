module.exports = {
    registerUser: require('./register-user'),
    authenticateUser: require('./authenticate-user'),
    retrieveUsers: require('./retrieve-users'),
    retrieveUser: require('./retrieve-user'),
    findUserById: require('./find-user'),
    modifyUser: require('./modify-user'),
    unregisterUser: require('./unregister-user'),
    sendMessage: require('./send-message'),
    retrieveMessages: require('./retrieve-messages'),
    retrieveMessageById: require('./retrieve-message-by-id'),
    setMessageToRead: require('./set-message-to-read')
}