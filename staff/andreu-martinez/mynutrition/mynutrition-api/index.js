require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { mongoose } = require('mynutrition-data')
const cors = require('cors')

const {
    registerUser,
    authenticateUser,
    retrieveUsers,
    retrieveUser,
    retrieveUserById,
    unregisterUser,
    modifyUser,
    sendMessage,
    retrieveMessages,
    retrieveMessage,
    retrieveMessagesChain,
    setMessageToRead
} = require('./handlers')

const logger = require('./utils/my-logger')

const { env: { PORT, MONGO_URL }, argv: [, , port = PORT || 8080] } = process

logger.info('starting server');

(async () => {
    try {
        await mongoose.connect(MONGO_URL)

        const server = express()

        server.use(cors())
        server.options('*', cors());

        const api = express.Router()

        const jsonBodyParser = bodyParser.json()

        api.post('/users', jsonBodyParser, registerUser)

        api.post('/users/auth', jsonBodyParser, authenticateUser)

        api.get('/users', retrieveUsers)

        api.get('/userbyid', jsonBodyParser, retrieveUserById)

        api.get('/user', retrieveUser)

        api.delete('/users', jsonBodyParser,unregisterUser)

        api.patch('/users', jsonBodyParser, modifyUser)

        api.post('/messages', jsonBodyParser, sendMessage)

        api.get('/messages', jsonBodyParser, retrieveMessages)

        api.get('/messages/:id', jsonBodyParser, retrieveMessage)

        api.get('/messages/:id/chain', jsonBodyParser, retrieveMessagesChain)

        api.patch('/messages', jsonBodyParser, setMessageToRead) 

        api.all('*', (req, res) => {
            res.status(404).json({ error: 'sorry, this endpoint isn\'t available' })
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