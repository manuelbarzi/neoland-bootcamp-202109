const registerUser = require('./register-user')
const authenticateUser = require('./authenticate-user')
const retrieveUser = require('./retrieve-user')
const modifyUser = require('./modify-user')
const unregisterUser = require('./unregister-user')
const registerItems = require('./register-items')
const searchItems = require('./search-items')
const retrieveFavItems = require('./retrieve-fav-items')
const registerSubscription = require('./register-subscription')
const retrieveItem = require('./retrieve-item')
const registerClickedItem = require('./register-clicked-item')
const registerSearch = require('./register-search')
const retrieveTrendingItems = require('./retrieve-trending-items')

module.exports = {
    registerUser,
    authenticateUser,
    retrieveUser,
    modifyUser,
    unregisterUser,
    registerItems,
    searchItems,
    retrieveFavItems,
    registerSubscription,
    retrieveItem,
    registerClickedItem,
    registerSearch,
    retrieveTrendingItems
}