const { registerUser, authenticateUser, retrieveUser } = require('users')
const {register} = require('./components')

const express = require('express')
const bodyParser = require('body-parser')
const authenticate = require('./components/authenticate')
const formBodyParser = bodyParser.urlencoded({ extend: false })

const server = express()

server.use(express.static('public'))

server.get('/register', (req, res) => {

    res.send(register())
    
})

server.post('/register', formBodyParser, (req, res) => {
    const { body: { name, username, password } } = req

    try {
            registerUser(name, username, password, function (error) {
            if (error) {
                res.send( register({name, username, feedback: error.message}))
            } else {
                res.redirect('/login')
            }
        })
    } catch (error) {
        res.send(register({name, username, feedback: error.message}))
    }
})

server.get('/login', (req, res) => {
    res.send(authenticate())
})

server.post('/login', formBodyParser, (req, res) => {
    const { body: { username, password } } = req

    try {
        authenticateUser(username, password, (error, id) => {
            if (error) {
                res.send(authenticate({username, feedback: error.message}))
            } else {
                res.setHeader('Set-Cookie', `user-id=${id}; Max-Age=3600`)
                res.redirect('/home')
            }
        })
    } catch (error) {
        res.send(authenticate({username, feedback: error.message}))
    }  
})

server.get('/home', formBodyParser, (req, res) => {

    const { headers: { cookie } } = req

    if (!cookie) return res.redirect('/')

    const [, id] = cookie.split('=')

    retrieveUser(id, (error, user) => {
        if (error)
            return res.send(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
                        <title>Private | Demo Web-App</title>
                    
                        <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
                        <link rel="stylesheet" href="style.css">
                    </head>
                    <body>
                        <h1>${error.message}</h1>
                    </body>
                    </html>`)

        res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>Welcome ${user.name}</h1>
                <form method="POST" action="/logout">
                    <button type="submit">Logout</button>
                </form>  
            </body>
            </html>`)
    })
})

server.post('/logout', formBodyParser, (req, res) => {
            res.setHeader('Set-Cookie', `user-id=null; Max-Age=0`)
            res.redirect('/')
})


server.listen(8000, () => { console.log('server listening on port 8000') })