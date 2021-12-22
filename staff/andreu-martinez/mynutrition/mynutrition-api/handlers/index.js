module.exports = {
    registerUser: require('./register-user'),
    authenticateUser: require('./authenticate-user'),
    retrieveUsers: require('./retrieve-users'),
    retrieveUser: require('./retrieve-user'),
    retrieveUserById: require('./retrieve-user-by-id'),
    modifyUser: require('./modify-user'),
    unregisterUser: require('./unregister-user'),
    sendMessage: require('./send-message'),
    modifyMessage: require('./modify-message'),
    retrieveMessages: require('./retrieve-messages'),
    retrieveMessage: require('./retrieve-message'),
    retrieveMessagesChain: require('./retrieve-messages-chain'),
    retrieveMessageToRead: require('./set-message-to-read')
}