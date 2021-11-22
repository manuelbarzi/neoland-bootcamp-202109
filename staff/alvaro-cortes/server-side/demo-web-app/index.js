const express = require('express')
const bodyParser = require('body-parser')
const formBodyParser = bodyParser.urlencoded({ extended: false })
const { registerUser, authenticateUser, retrieveUser, modifyUser, unregisterUser } = require('users')
const { home, landing, login, register, fail, postSignUp, changePass, changeData, unregister } = require('./components')
const { searchVehicles } = require('vehicles')

function getUserId(cookie) {
    let res = null
    if (cookie) {
        const [, id] = cookie.split('=')
        res = id
    }
    return res
}

const server = express()

server.use(express.static('public')) // middleware

server.get('/', (req, res) => {
    const { headers: { cookie } } = req

    const id = getUserId(cookie)

    if (id) {
        retrieveUser(id, (error, user) => {
            if (error) return res.send(landing())

            const { query: { query } } = req

            if (query) {
                return searchVehicles(query, (error, results) => {
                    if (error) return res.send("/")

                    res.send(home({ name: user.name, results }))
                })
            } else {
                return res.send(home({ name: user.name }))
            }
        })
    } else
        res.send(landing())
})

server.get('/register', (req, res) => {
    const { headers: { cookie } } = req

    const id = getUserId(cookie)

    if (id) return res.redirect('/')

    res.send(register())
})


server.post('/register', formBodyParser, (req, res) => {
    // const name = req.body.name
    // const username = req.body.username
    // const password = req.body.password
    const { body: { name, username, password } } = req

    const { headers: { cookie } } = req

    const id = getUserId(cookie)

    if (id) return res.redirect('/')

    try {
        registerUser(name, username, password, function (error) {
            if (error) {
                res.send(fail(error))

                return
            }

            res.send(postSignUp())
        })
    } catch (error) {
        return res.send(register(name, username, error))
    }
})

server.get('/login', (req, res) => {
    const { headers: { cookie } } = req

    const id = getUserId(cookie)

    if (id) return res.redirect('/')

    res.send(login())
})

server.post('/login', formBodyParser, (req, res) => {
    const { body: { username, password } } = req

    const { headers: { cookie } } = req

    const id = getUserId(cookie)

    if (id) return res.redirect('/')

    try {
        authenticateUser(username, password, (error, id) => {
            if (error)
                return res.send(login({ username, feedback: error.message }))

            res.setHeader('Set-Cookie', `user-id=${id}; Max-Age=3600`)

            res.redirect('/')
        })
    } catch (error) {
        return res.send(login({ username, feedback: error.message }))
    }
})

server.get('/change-password', (req, res) => {
    res.send(changePass())
})

server.post("/change-password", formBodyParser, (req, res) => {
    const { body: { oldPassword, newPassword } } = req
    const { headers: { cookie } } = req
    const [, id] = cookie.split('=')

    try {
        modifyUser(id, ".", ".", oldPassword, newPassword, error => {
            if (error)
                return res.send(changePass({ error: error.message }))

            res.send(changePass({ success: "Password changed." }))
        })
    } catch (error) {
        return res.send(changePass())
    }
})

server.get('/change-data', (req, res) => {
    res.send(changeData())
})

server.post('/chang-edata', formBodyParser, (req, res) => {
    const { body: { name, username } } = req
    const { headers: { cookie } } = req
    const [, id] = cookie.split('=')

    try {
        modifyUser(id, name, username, ".", ".", error => {
            if (error)
                return res.send(changeData({ name, username, error }))

            else if (name === "" && username === "")
                res.send(changeData({ success: "No data has been updated." }))

            else
                res.send(changeData({ success: "Your data has been updated." }))
        })
    } catch (error) {
        return res.send(changeData({ name, username, error }))
    }
})

server.get('/unregister', (req, res) => {
    res.send(unregister())
})

server.post('/unregister', formBodyParser, (req, res) => {
    const { body: { password } } = req
    const { headers: { cookie } } = req
    const [, id] = cookie.split('=')

    unregisterUser(id, password, error => {
        if (error)
            res.send(unregister({ error }))
        else {
            res.setHeader('Set-Cookie', `user-id=null; Max-Age=0`)
            res.redirect('/')
        }
    })
})

server.post('/signout', (req, res) => {
    res.setHeader('Set-Cookie', `user-id=null; Max-Age=0`)

    res.redirect('/')
})

server.listen(8000, () => {
    console.log('Server listen on port 8000.')
})