module.exports = {
    registerUser: require('./register-user'),
    authenticateUser: require('./authenticate-user'),
    retrieveUsers: require('./retrieve-users'),
    retrieveUser: require('./retrieve-user'),
    retrieveUserById: require('./retrieve-user-by-id'),
    modifyUser: require('./modify-user'),
    unregisterUser: require('./unregister-user'),
    sendMessage: require('./send-message'),
    retrieveMessages: require('./retrieve-messages'),
    retrieveMessage: require('./retrieve-message'),
    retrieveMessagesChain: require('./retrieve-messages-chain'),
    setMessageToRead: require('./set-message-to-read')
}