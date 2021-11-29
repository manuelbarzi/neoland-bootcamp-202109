const registerUser = require('./logic/register-user')
const retrieveUser = require('./logic/retrieve-user')
const unregisterUser = require('./logic/unregister-user')
const findUser = require('./logic/find-user')
const modifyUser = require('./logic/modify-user')
const authenticateUser = require('./logic/authenticate-user')

const { argv: [, , command] } = process

if (command === "register") {
    const { argv: [, , , name, username, password] } = process

    registerUser(name, username, password, error => {
        if (error) {
            console.log(error.message)

            return
        }
        console.log("User registered.")
    })
} else if (command === "unregister") {
    const { argv: [, , , id, password] } = process

    unregisterUser(id, password, error => {
        if (error) {
            console.log(error.message)

            return
        }
        console.log(`User ${id} unregistered`)
    })
} else if (command === "retrieve") {
    const { argv: [, , , id] } = process

    retrieveUser(id, (error, user) => {
        if (error) {
            console.log(error.message)

            return
        }

        console.log(`User ${user.name} retrieved.`)
    })

} else if (command === "find") {
    const { argv: [, , , query] } = process

    findUser(query, (error, result) => {
        if (error) {
            console.log(error.message)

            return
        }

        result.forEach(({ name, username, password }) => console.log(name, username, password))
    })

} else if (command === "modify") {
    const { argv: [, , , id, name, username, oldPassword, newPassword] } = process

    modifyUser(id, name, username, oldPassword, newPassword, (error, user) => {
        if (error) {
            console.log(error.message)

            return
        }
         console.log(user)
    })

} else if (command === "authenticate") {
    const { argv: [, , , username, password] } = process

    authenticateUser(username, password, (error, id) => {
        if (error) {
            console.log(error.message)

            return
        }
        console.log(`User ${id} authenticated.`)
    })
} 