const { model } = require('mongoose')
const { user, item } = require('./schemas')

module.exports = {
    User: model('User', user),
    Item: model('Item', item)
}