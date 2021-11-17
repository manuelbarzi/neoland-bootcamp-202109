const express = require('express')
const bodyParser = require('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false })
const {registerUser} = require('users')

const server = express()

server.use(express.static('public'))


// ----- Route register -----
server.get('/register', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to my-app</title>
        </head>
        <body>
            <h1>Welcome to register page</h1>
            <form method='POST' action='/register'>
                <input name='name' type='text' placeholder="name"/>
                <input name='username' type='text' placeholder="username"/>
                <input name='password' type='password' placeholder="password"/>
                <button type='submit'>Registrarse</button>
            </form>
            <a href="/login"><button type='button'> Go to login</button></a>
        </body>
        </html>
    `)
})

server.post('/register', formBodyParser, (req, res) => {

    const {body: {name, username, password}} = req

    registerUser(name, username, password, err => {
        if (err) res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to my-app</title>
            </head>
            <body>
                <h1>${err.message}</h1>
            </body>
            </html>
        `)
        else res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to my-app</title>
            </head>
            <body>
                <h1>Tu usuario se ha registrado correctamente</h1>
            </body>
            </html>
        `)
    })
})

///////////////////////////////////////////////////////////////////////////////////////////

// ----- Route login -----
server.get('/login', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to my-app</title>
        </head>
        <body>
            <h1>Welcome to register page</h1>
            <form>
                <input type='text' placeholder="username"/>
                <input type='password' placeholder="password"/>
                <button type='submit'>Iniciar sesión</button>
            </form>
            <a href="/register"><button type='button'> Go to register</button></a>
        </body>
        </html>
    `)
})
///////////////////////////////////////////////////////////////////////////////////////////


server.listen(8000, () => {
    console.log('Server listen on port 8000')
})