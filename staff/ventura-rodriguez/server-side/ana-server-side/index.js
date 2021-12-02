const express = require('express')
const {register, unregister, modify, retrieve, changePassword} = require('users')

const app = express()
app.use(express.json())

app.post('/register', (req, res) => {
    const {body: user} = req
    register(user, (err, data) => {
        if(err) res.send(err.message)
        else res.send(data)
    })
})

app.post('/unregister', (req, res) => {
    const {body: user} = req
    unregister(user, (err, data) => {
        if(err) res.send(err.message)
        else res.send(data)
    })
})

app.post('/users', (req, res) => {
    const {body: user} = req
    retrieve(user, (err, data) => {
        if(err) res.send(err.message)
        else res.send(data)
    })
})

app.patch('/users', (req, res) => {
    const {body: user} = req
    modify(user, (err, data) => {
        if(err) res.send(err.message)
        else res.send(data)
    })
})

app.patch('/users/password', (req, res) => {
    const {body: user} = req
    changePassword(user, (err, data) => {
        if(err) res.send(err.message)
        else res.send(data)
    })
})

app.listen(8000, () => {
    console.log('Server listen on port 8000')
})