require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { mongoose } = require('logical-echo-data')
const cors = require('cors')
const { 
    registerUser, 
    authenticateUser, 
    retrieveUser, 
    modifyUser,
    unregisterUser,
    searchItems,
    retrieveItemsByStore,
    registerSubscription,
    retrieveItem,
    retrieveTrendingItems
} = require('./handlers')
const logger = require('./utils/my-logger')

const { env: { PORT, MONGO_URI }, argv: [, , port = PORT || 8080] } = process

logger.info('starting server');

(async () => {
    try {
        await mongoose.connect(MONGO_URI || 'mongodb://localhost/test')
            
        const server = express()

        server.use(cors())

        const api = express.Router()

        const jsonBodyParser = bodyParser.json()

        api.post('/users', jsonBodyParser, registerUser)

        api.post('/users/auth', jsonBodyParser, authenticateUser)

        api.get('/users', retrieveUser)

        api.patch('/users', jsonBodyParser, modifyUser)

        api.delete('/users', jsonBodyParser, unregisterUser)

        api.get('/search/items', searchItems)

        api.get('/search/items/item', retrieveItem) // with params: items/item/ghty5h352d

        api.get('/search/store', retrieveItemsByStore)

        api.post('/subscriptions', jsonBodyParser, registerSubscription)

        api.get('/trends', retrieveTrendingItems)

        api.all('*', (req, res) => {
            res.status(404).json({ message: 'sorry, this endpoint is not available' })
        })

        server.use('/api', api)

        server.listen(port, () => logger.info(`server up and listening on port ${port}`))

        process.on('SIGINT', () => {
            logger.info('stopping server')

            process.exit(0)
        })
    } catch (error) {
        logger.error(error)
    }
})()
