require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const { mongoose } = require('../nts-data')
const { registerUser,
    authenticateUser,
    retrieveUser,
    modifyUser,
    unregisterUser,
    createReservation,
    retrieveReservation,
    searchReservations,
    modifyReservation,
    addNoteToReservation,
    deleteNoteFromReservation,
    deleteReservation,
    retrieveReservations
}
    = require('./handlers')

const cors = require('cors')
const corsOptions = {
    "Access-Control-Allow-Methods": ['GET', 'PUT', 'POST', 'DELETE']}    

const { env: { PORT, MONGO_URL }, argv: [, , port = PORT || 8080] } = process;

(async() => {
    try{
        await mongoose.connect(MONGO_URL)
        
        const server = express()

        server.use(cors(corsOptions))

        const api = express.Router()

        const jsonBodyParser = bodyParser.json()


        api.post('/users', jsonBodyParser, registerUser)

        api.post ('/users/reservations', jsonBodyParser, createReservation)

        api.post ('/users/reservations/note/', jsonBodyParser, addNoteToReservation)

        api.post('/users/auth', jsonBodyParser, authenticateUser)

        api.get('/users', retrieveUser)

        api.get('/users/reservations/pax', searchReservations)
        
        api.patch('/users', jsonBodyParser, modifyUser)
        
        api.patch ('/users/reservations', jsonBodyParser, modifyReservation)
        
        api.delete("/users", jsonBodyParser, unregisterUser)
        
        api.delete("/users/reservations", jsonBodyParser, deleteReservation)
        
        api.delete("/users/reservations/note", jsonBodyParser, deleteNoteFromReservation)
        
        api.get ('/users/allreservations', retrieveReservations)
        
        api.get ('/users/reservation/:reservation', retrieveReservation)

        api.all('*', (req, res) => {
            res.status(404).json({ message: 'sorry, this endpoint isn\'t available' })
        })

        server.use('/api', api)

        server.listen(port, () => console.log(`server up and listening on port ${port}`))


    }catch (error){
        console.error(error)
    }
})()

