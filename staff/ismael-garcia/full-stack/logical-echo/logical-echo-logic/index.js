const registerUser = require('./register-user')
const authenticateUser = require('./authenticate-user')
const retrieveUser = require('./retrieve-user')
const modifyUser = require('./modify-user')
const unregisterUser = require('./unregister-user')
const searchItems = require('./search-items')
const retrieveItemsByStore = require('./retrieve-items-by-store')
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
    searchItems,
    retrieveItemsByStore,
    registerSubscription,
    retrieveItem,
    registerClickedItem,
    registerSearch,
    retrieveTrendingItems
}