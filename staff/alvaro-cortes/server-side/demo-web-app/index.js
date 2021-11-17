const express = require('express')
const bodyParser = require('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false })
const { registerUser, authenticateUser, retrieveUser, modifyUser, unregisterUser, unregisterUser } = require('users')

const server = express()

server.use(express.static('public')) // middleware

server.get('/hello', (req, res) => { // http://localhost:8000/hello?name=Pepito => html saluting Pepito
    const name = req.query.name

    const userAgent = req.headers['user-agent']

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
        <title>Hello, ${name}!</title>
    
        <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Hello, ${name}!</h1>
        <p>You've connected to this server using the client ${userAgent}.
    </body>
    </html>`)

})

server.get('/signup', (req, res) => { // http://localhost:8000/signup
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,  initial-scale=1.0">
            <title>Sign up | Demo Web-App</title>
        
            <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
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
    // const name = req.body.name
    // const username = req.body.username
    // const password = req.body.password
    const { body: { name, username, password } } = req

    registerUser(name, username, password, function (error) {
        if (error) {
            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width,  initial-scale=1.0">
                <title>Sign up | Demo Web-App</title>
            
                <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
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
            
                <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>User successfully registered</h1>

                <p>You can proceed to <a href="/signin">sign in</a>.</p>
            </body>
            </html>`)
    })
})

server.get('/signin', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,  initial-scale=1.0">
        <title>Sign in | Demo Web-App</title>
    
        <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
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
                
                    <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
                    <link rel="stylesheet" href="style.css">
                </head>
                <body>
                    <h1>Demo Web-App</h1>
                    <h1>Sign in</h1>
                    <form class="signin" method="POST" action="/signin">
                        <input type="text" name="username" placeholder="username">
                        <input type="password" name="password" placeholder="password">
                        <span class="signin__feedback signin__feedback-error">${error.messsage}</span>
                        <button>Sign in</button>
                    </form>
                </body>
                </html>`)

        res.setHeader('Set-Cookie', `user-id=${id}`) //Max-Age=3600

        res.redirect('/private')
    })

    server.get('/private', (req, res) => {
        const { headers: { cookie } } = req
        //const cookie = req.headers

        if (!cookie) return res.redirect('/')

        // cookie = 'user-id=kw0vnj6s'
        // cookie.split('=')
        // cookie = ['user-id', 'kw0vnj6s'][1]

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
                <meta name="viewport" content="width=device-width,  initial-scale=1.0">
                <title>Private | Demo Web-App</title>
            
                <link rel="shortcut icon" href="favicon.webp" type="image/x-icon">
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                <h1>Hello, ${user.username}!</h1>

                <a href="/changepassword"><button>Cambiar contraseña</button></a>
                <a href="/changedata"><button>Cambiar datos de usuario</button></a>

            </body>
            </html>`)
        })

    })
})

server.get('/changepassword', (req, res) => {
    res.send(`<!DOCTYPE html>
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
        <h3> Modificar contraseña </h3>

        <form method="POST" action="/changepassword">
            <input type="password" name="oldPassword" placeholder="Contraseña anterior"></input>
            <input type="password" name="newPassword" placeholder="Nueva contraseña"></input>
            <button type="submit">Enviar</button>
        </form>

        <a href="/private"><button>Volver atrás</button></a>
    </body>
    </html>`)
})

server.post("/changepassword", formBodyParser, (req, res) => {
    const { body: { oldPassword, newPassword } } = req
    const { headers: { cookie } } = req
    const [, id] = cookie.split('=')

    modifyUser(id, ".", ".", oldPassword, newPassword, error => {
        if (error)
        res.send(`<!DOCTYPE html>
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

            <a href="/changepassword"><button>Volver atrás</button></a>
        </body>
        </html>`)

        res.send(`<!DOCTYPE html>
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
            <h1>Contraseña modificada con exito.</h1>

            <a href="/changepassword"><button>Volver atrás</button></a>
        </body>
        </html>`)
    })
})

server.get('/changedata', (req, res) => {
    res.send(`<!DOCTYPE html>
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
        <h3> Modificar contraseña </h3>

        <form method="POST" action="/changedata">
            <input type="text" name="name" placeholder="Nombre"></input>
            <input type="text" name="username" placeholder="Nombre de usuario"></input>
            <button type="submit">Enviar</button>
        </form>

        <a href="/private"><button>Volver atrás</button></a>
    </body>
    </html>`)
})

server.post('/changedata', formBodyParser, (req, res) => {
    const { body: { name, username } } = req
    const { headers: { cookie } } = req
    const [, id] = cookie.split('=')

    modifyUser(id, name, username, ".", ".", error => {
        if (error)
        res.send(`<!DOCTYPE html>
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

            <a href="/changedata"><button>Volver atrás</button></a>
        </body>
        </html>`)

        else if (name === "" && username === "")
        res.send(`<!DOCTYPE html>
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
            <h1>No has modificados ningun dato.</h1>

            <a href="/changedata"><button>Volver atrás</button></a>
        </body>
        </html>`)

        else 
        res.send(`<!DOCTYPE html>
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
            <h1>Datos de usuarios modificados con exito.</h1>

            <a href="/changedata"><button>Volver atrás</button></a>
        </body>
        </html>`)
    })
})

server.get('/unregister', (req, res) => {
    res.send(`<!DOCTYPE html>
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
        <h3> Modificar contraseña </h3>

        <form method="POST" action="/unregister">
            <input type="password" name="password" placeholder="Contrase{a"></input>
            <button type="submit">Eliminar cuenta</button>
        </form>

        <a href="/private"><button>Volver atrás</button></a>
    </body>
    </html>`)
})

server.post('/unregister', formBodyParser, (req, res) => {
    const { body: { password } } = req
    const { headers: { cookie } } = req
    const [, id] = cookie.split('=')

    unregisterUser(id, password, error => {
        if (error)
        res.send(`<!DOCTYPE html>
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

            <a href="/unregister"><button>Volver atrás</button></a>
        </body>
        </html>`)

        res.redirect('/')
    })
})

server.listen(8000, () => {
    console.log('Server listen on port 8000.')
})