require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { mongoose } = require('data')

const {
    registerUser,
    authenticateUser,
    retrieveUser,
    modifyUser,
    searchGames,
    retrieveGame,
    toggleFavGame,
    retrieveFavGames
} = require('./handlers')

const logger = require('./utils/my-logger')

const cors = require('cors')
const corsOptions = {
    "Access-Control-Allow-Methods": ['GET', 'PUT', 'POST', 'DELETE']
}

const { env: { PORT, MONGO_URL }, argv: [, , port = PORT || 8080] } = process

logger.info('starting server')

mongoose.connect(MONGO_URL)
    .then(() => {
        const server = express()

        server.use(cors(corsOptions))

        const api = express.Router()

        const jsonBodyParser = bodyParser.json()

        api.post('/users', jsonBodyParser, registerUser)

        api.post('/users/auth', jsonBodyParser, authenticateUser)

        api.get('/users', retrieveUser)

        api.patch('/users', jsonBodyParser, modifyUser)

        api.get('/games', searchGames)

        api.get('/games/:gameId', retrieveGame)

        api.patch('/users/favs', jsonBodyParser, toggleFavGame)

        api.get('/users/favs', retrieveFavGames)

        api.all('*', (req, res) => {
            res.status(404).json({ message: 'sorry, this endpoint isn\'t available' })
        })

        server.use('/api', api)

        server.listen(port, () => logger.info(`server up and listening on port ${port}`))

        process.on('SIGINT', () => {
            logger.info('stopping server')

            process.exit(0)
        })
    })
    .catch(error => logger.error(error))