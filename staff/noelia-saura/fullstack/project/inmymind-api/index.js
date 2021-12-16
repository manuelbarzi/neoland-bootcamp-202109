require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { mongoose } = require('inmymind-data')

const {
    registerUser,
    authenticateUser,
    retrieveUser,
    modifyUser,
    addNote,
    deleteNote,
    addTreatment,
    deleteTreatment,
    addDiary,
    addDisorder,
    retrieveNotes,
    retrieveTreatments,
    retrieveDiary,
    retrieveDisorder,
    unregisterUser
} = require('./handlers')

const logger = require('./utils/my-logger')

const { env: { PORT, MONGO_URL }, argv: [, , port = PORT || 8080] } = process

logger.info('starting server')

const cors = require('cors');

mongoose.connect(MONGO_URL)
    .then(() => {
        const server = express()

        const api = express.Router()

        const jsonBodyParser = bodyParser.json()

        api.post('/users', jsonBodyParser, registerUser)

        api.post('/users/auth', jsonBodyParser, authenticateUser)
        
        api.patch('/users', jsonBodyParser, modifyUser)

        api.post('/notes',jsonBodyParser, addNote)

        api.post('/diaries',jsonBodyParser, addDiary)

        api.post('/disorders',jsonBodyParser, addDisorder)

        api.post('/treatments',jsonBodyParser, addTreatment)

        api.get('/users', jsonBodyParser, retrieveUser)

        api.get('/notes',jsonBodyParser, retrieveNotes) // user_id - date

        api.get('/treatments',jsonBodyParser, retrieveTreatments)
        
        api.get('/diaries',jsonBodyParser,retrieveDiary)

        api.get('/disorders',jsonBodyParser,retrieveDisorder)

        api.delete('/notes/:id',jsonBodyParser, deleteNote)

        api.delete('/treatments/:id',jsonBodyParser, deleteTreatment)

        api.delete('/unregister/:id',jsonBodyParser,unregisterUser)

        api.all('*', (req, res) => {
            res.status(404).json({ message: 'sorry, this endpoint isn\'t available' })
        })

        server.use(cors());

        server.use('/api', api)

        server.listen(port, () => logger.info(`server up and listening on port ${port}`))

        process.on('SIGINT', () => {
            logger.info('stopping server')

            process.exit(0)
        })
    })
    .catch(error => logger.error(error))