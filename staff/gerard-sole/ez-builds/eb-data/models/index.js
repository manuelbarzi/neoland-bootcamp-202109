const { model } = require('mongoose')
const { user, champion, item } = require('./schemas')

module.exports = {
    User: model('User', user),
    Champion: model('Champion', champion),
    Item: model('Item', item)
}