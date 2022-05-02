const { model } = require('mongoose')
const { user, token, item, search, clickedItem, subscription } = require('./schemas')

module.exports = {
    User: model('User', user),
    Token: model('Token', token),
    Item: model('Item', item),
    Search: model('Search', search),
    ClickedItem: model('ClickedItem', clickedItem),
    Subscription: model('Subscription', subscription)
}