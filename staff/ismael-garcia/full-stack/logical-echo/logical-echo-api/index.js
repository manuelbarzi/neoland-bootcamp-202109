require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { mongoose } = require('logical-echo-data')
const cors = require('cors')
const Redis = require('ioredis')
const { 
    registerUser, 
    authenticateUser, 
    retrieveUser, 
    modifyUser,
    unregisterUser,
    // searchItems,
    registerSubscription,
    retrieveItem,
    retrieveFavItems,
    retrieveTrendingItems
} = require('./handlers')
const { searchItems, registerSearch } = require('logical-echo-logic')
const { handleError } = require('./handlers/helpers')
const logger = require('./utils/my-logger')

const { env: { PORT, MONGO_URI }, argv: [, , port = PORT || 8080] } = process

logger.info('starting server');

(async () => {
    try {
        await mongoose.connect(MONGO_URI || 'mongodb://localhost/test')
        
        const redis = new Redis({
            host: '127.0.0.1',
            port: 6379
        })

        const cache = (req, res, next) => {
            const { query: { q } } = req
            const { params: { item_id } } = req

            if (item_id) {
                redis.get(item_id, (error, result) => {
                    if (error) throw error
    
                    if (result !== null) {
                        return res.json(JSON.parse(result))
                    } else {
                        return next()
                    }
                })
            } else {
                redis.get(q, (error, result) => {
                    if (error) throw error
    
                    if (result !== null) {
                        return res.json(JSON.parse(result))
                    } else {
                        return next()
                    }
                })
            }
        }

        const server = express()

        server.use(cors())

        const api = express.Router()

        const jsonBodyParser = bodyParser.json()

        api.post('/users', jsonBodyParser, registerUser)

        api.post('/users/auth', jsonBodyParser, authenticateUser)

        api.get('/users', retrieveUser)

        api.patch('/users', jsonBodyParser, modifyUser)

        api.delete('/users', jsonBodyParser, unregisterUser)

        api.get('/items', cache, async (req, res) => {
            const { query: { q } } = req
        
            try {
                const search = {
                    query: q,
                    date: new Date().toLocaleString()
                }
        
                await registerSearch(search)
        
                const items = await searchItems(q)
                console.log(items)
        
                redis.set(q, JSON.stringify(items), "EX", 21600)
        
                res.json(items)
            } catch (error) {
                handleError(error, res)
            }
        })

        api.get('/items/:item', cache, async (req, res) => {
            const { params: { item_id } } = req

            const item = await retrieveItem()

            redis.set(item_id, JSON.stringify(item), "EX", 21600)

            return res.json(item)
        }) 

        api.get('/items/trend', cache, async (req, res) => {            
            const trend_items = await retrieveTrendingItems()

            redis.set('trend', JSON.stringify(trend_items), "EX", 21600)

            return res.json(trend_items)
        })

        api.get('/items/favs', cache, async (req, res) => {
            const { headers: { authorization } } = req

            const [, token] = authorization.split(' ')

            const favs = await retrieveFavItems()

            redis.set(token, JSON.stringify(favs), "EX", 21600)
        })

        api.post('/subscriptions', jsonBodyParser, registerSubscription)

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
