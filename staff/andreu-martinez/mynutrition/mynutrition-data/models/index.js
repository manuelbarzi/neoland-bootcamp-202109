const { model } = require('mongoose')
const { user, message } = require('./schemas')

module.exports = {
    User: model('User', user),
    Message: model('Message', message)
}