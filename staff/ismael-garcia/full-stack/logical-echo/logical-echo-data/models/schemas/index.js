const { model } = require('mongoose')
const clickedItem = require( './clicked-item' )
const { user, item, search, clickedItem } = require('./schemas')

module.exports = {
    User: model('User', user),
    Item: model('Item', item),
    Search: model('Search', search),
    ClickedItem: model('ClickedItem', clickedItem)
}