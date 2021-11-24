const express = require('express')
const { registerUser, unregisterUser, modifyUser, retrieveUser, findUsers, authenticateUser } = require('users')
const jwt = require('jsonwebtoken')
const { MongoClient } = require('mongodb')
const context = require('../users/logic/context')


require('dotenv').config()

const { env: { PORT, SECRET, MONGO_URL }, argv: [, , port = PORT || 8080] } = process

MongoClient.connect(MONGO_URL, (error, client) => {
    if (error) return console.error(error)

    context.db = client.db()

    const app = express()
    app.use(express.json())

    app.post('/api/users/register', (req, res) => {
        const { body: { name, username, password } } = req

        registerUser(name, username, password, (err, data) => {
            if (err) res.send(err.message)
            else res.send(data)
        })
    })

    app.post('/api/users/auth', (req, res) => {
        const { body: { username, password } } = req
        authenticateUser(username, password, (err, userId) => {
            if (err) return res.send(err.message)

            const token = jwt.sign({ sub: userId, exp: Math.floor(Date.now() / 1000) + 3600 }, SECRET)
            res.send({ token })
        })
    })

    // app.post('/api/users/unregister', (req, res) => {
    //     const { headers: { authorization }, body: user } = req
    //     const [, token] = authorization.split(' ')
    //     const private_info = { token, SECRET }

    //     unregister(user, (err, data) => {
    //         if (err) res.send(err.message)
    //         else res.send({ token })
    //     })
    // })

    app.post('/api/users', (req, res) => {
        const { headers: { authorization }, body: user } = req

        try {
            const [, token] = authorization.split(' ')
            const payload = jwt.verify(token, SECRET)
            const { sub: id } = payload

            retrieveUser(id, (err, data) => {
                if (err) res.send({ err: message })
                else res.send(data)
            })
        } catch ({ message }) {
            res.send({ error: message })
        }
    })

    app.patch('/api/users', (req, res) => {
        const { headers: { authorization }, body: user } = req
        debugger
        try {
            const [, token] = authorization.split(' ')
            const payload = jwt.verify(token, SECRET)
            const { sub: id } = payload

            modifyUser(id, user, (err, data) => {
                if (err) res.send(err.message)
                else res.send(data)
            })
        } catch ({ message }) {
            res.send({ error: message })
        }
    })

    // app.patch('/api/users/password', (req, res) => {
    //     const { headers: { authorization }, body: user } = req
    //     const [, token] = authorization.split(' ')
    //     const private_info = { token, SECRET }

    //     changePassword(user, private_info, (err, data) => {
    //         if (err) res.send(err.message)
    //         else res.send(data)
    //     })
    // })

    app.listen(port, () => { console.log(`Server listen on port ${port}`) })

})