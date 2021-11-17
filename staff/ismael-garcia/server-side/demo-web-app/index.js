const express = require('express')
const bodyParser = require('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false }) // estudiar esta línea
const { registerUser, authenticateUser, retrieveUser, modifyUser } = require('users')

const server = express()

server.use(express.static('public')) // middleware

// Syntax: server.get(path, callback(request, response) => { asynchronous body })


// ----- Route signup -----
server.get('/signup', (req, res) => { // http://localhost:8000/signup
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
        <title>Sign up | Demo Web-App</title>
    
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Demo Web-App</h1>
        <h1>Sign up</h1>
        <form method="POST" action="/signup">
            <input type="text" name="name" placeholder="name">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button>Sign up</button>
        </form>
    </body>
    </html>`)
})

server.post('/signup', formBodyParser, (req, res) => {
    const { body: { name, username, password } } = req

    registerUser(name, username, password, error => {
        if (error) {
            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width,  initial-scale=1.0">
                <title>Sign up | Demo Web-App</title>
            
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>Sorry 🤡🎈</h1>

                <p>${error.message}</p>

                <a href="/signup">Try again</a>.
            </body>
            </html>`)

            return 
        }
        
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,  initial-scale=1.0">
            <title>Sign up | Demo Web-App</title>
        
            <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <h1>User successfully registered</h1>

            <p>You can proceed to <a href="/signin">Sign in</a>.</p>
        </body>
        </html>`)
    })
})


// ----- Route signin -----
server.get('/signin', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign in | Demo Web-App</title>
    
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Demo Web-App</h1>
        <h1>Sign in</h1>
        <form method="POST" action="/signin">
            <input type="text" name="username" placeholder="username">
            <input type="password" name="password" placeholder="password">
            <button>Sign in</button>
        </form>
    </body>
    </html>`)
})

server.post('/signin', formBodyParser, (req, res) => {
    const { body: { username, password } } = req

    authenticateUser(username, password, (error, id) => {
        if (error)
            return res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width,  initial-scale=1.0">
                <title>Sign in | Demo Web-App</title>
            
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>Demo Web-App</h1>
                <h1>Sign in</h1>
                <form class="signin" method="POST" action="/signin">
                    <input type="text" name="username" placeholder="username">
                    <input type="password" name="password" placeholder="password">
                    <span class="signin__feedback signin__feedback--error">${error.message}</span>
                    <button>Sign in</button>
                </form>
            </body>
            </html>`)

        res.setHeader('Set-Cookie', `user-id=${id}; Max-Age=3600`)

        res.redirect('/private')
    })

    server.get('/private', (req, res) => {
        const { headers: { cookie } } = req

        if(!cookie) return res.redirect('/')

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
                
                    <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
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
                <meta name="viewport" content="width=device-width,  initial-scale=1.0">
                <title>Private | Demo Web-App</title>
            
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>Hello, ${user.name}!</h1>
                <p><a href="/update-password">Update password</a></p>
            </body>
            </html>`)
        })
    })
})


// ----- Route update-password -----
server.get('/update-password', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
        <title>Update Password | Demo Web-App</title>
    
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Demo Web-App</h1>
        <h1>Update Profile</h1>
        <form method="POST" action="/update-password">
            <input type="password" name="newPassword" placeholder="New password">
            <button>Update Password</button>
        </form>
    </body>
    </html>`)
})

server.post('/update-password', formBodyParser, (req, res) => {
    const { headers: { cookie } } = req

    if(!cookie) return res.redirect('/')

    const [, id] = cookie.split('=')

    const { body: { newPassword } } = req

    modifyUser(id, '.', '.', newPassword, error => {
        if (error) {
            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width,  initial-scale=1.0">
                <title>Update Profile | Demo Web-App</title>
            
                <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>Sorry 🤡🎈</h1>

                <p>${error.message}</p>

                <a href="/update-profile">Try again</a>.
            </body>
            </html>`)

            return 
        }
        
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,  initial-scale=1.0">
            <title>Update Password | Demo Web-App</title>
        
            <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <h1>User information successfully updated</h1>
        </body>
        </html>`)
    })
})

server.listen(8000)