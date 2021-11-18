const express = require('express')
const bodyParser = require('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false })
const { registerUser, authenticateUser, retrieveUser, modifyUser } = require('users')
const {landing, home, signUp, signIn, modifyPassword, modifyData, unregisterUser, fail, postSignUp} = require ('./components')

const server = express()

function getUserId (cookie){
    let res = null
    if (cookie) {
    const [, id] =  cookie.split('=') 
    res = id    
}
    return res
} 

server.use(express.static('public')) // middleware

server.get ('/', (req,res) => {
    const { headers: { cookie } } = req
    const id = getUserId (cookie) 
    if (id) {
        retrieveUser (id, (error, user) =>{
            if (error){ 
                return res.send(landing())
            }else {
                return res.send(home (user))
                
            }
        })
    }else  res.send(landing())
})




server.get('/signup', (req, res) => { // http://localhost:8000/signup
    const { headers: { cookie } } = req
    const id = getUserId (cookie)
    if (id) return res.redirect ('/')
    res.send(signUp ())
})

server.post('/signup', formBodyParser, (req, res) => {
    //const name = req.body.name
    //const username = req.body.username
    // const password = req.body.password
    const { body: { name, username, password } } = req
    

    try{
    registerUser(name, username, password, function (error) {
        if (error) {
            res.send(fail ({feeedback: error.message}))

            return
        }

        res.send(postSignUp())
    })}catch (error) {
       return res.send (signUp ({name, username, feedback: error.message}))        
    }
})

server.get('/signin', (req, res) => {
    const { headers: { cookie } } = req
    const id = getUserId (cookie)
    if (id) return res.redirect ('/')
    res.send(signIn ())
})

server.post('/signin', formBodyParser, (req, res) => {
    const { body: { username, password } } = req
    const id = getUserId (cookie)
    if (id) return res.redirect ('/')
    res.send(signIn ())
    try{
    authenticateUser(username, password, (error, id) => {
        if (error)
            return res.send(signIn ({username, feedback: error.message} ))

        res.setHeader('Set-Cookie', `user-id=${id}`) //Max-Age=3600

        res.redirect('/')
    })}catch(error){
        return res.send (signIn ({username, feedback: error.message} ))
    }

    
})

server.get ('/modify-password', (req, res) => {
    const { headers: { cookie } } = req
    const id = getUserId (cookie)
    res.send (modifyPassword())
})

server.post ("/modify-password", formBodyParser, (req, res) =>{
    const { body: { oldPassword, newPassword } } = req
    const { headers: { cookie } } = req
    const [, id] = cookie.split ('=')
    try{
    modifyPassword(id, ".", ".", oldPassword, newPassword, error => {
        if (error)
        res.send(modifyPassword ({oldPassword, newPassword, feedback: message.error}))

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

            <a href="/modify-password"><button>Volver atrás</button></a>
        </body>
        </html>`)
    })}catch (error){
        res.send(modifyPassword ({oldPassword, newPassword, feedback: message.error}))
    }
})

server.get ('/changedata', (req,res) => {
    res.send (`<!DOCTYPE html>
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
        <h3> Modificar datos </h3>

        <form method="POST" action="/changedata">
            <input type="text" name="name" placeholder="Nombre"></input>
            <input type="text" name="username" placeholder="Nombre de usuario"></input>
            <button type="submit">Enviar</button>
        </form>

        <a href="/"><button>Volver atrás</button></a>
    </body>
    </html>`)
})

server.post('/changedata', formBodyParser, (req,res) => {
    const { body: { name, username } } = req
    const { headers: { cookie } } = req
    const [, id] = cookie.split('=')

    modifyUser(id, name, username, ".", ".", error => {
        if (error)
        res.send (`<!DOCTYPE html>
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
        res.send (`<!DOCTYPE html>
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

server.listen(8000, () => {
    console.log ('Server listen on port 8000.')
})
