const { readFile } = require('fs')

/**
 * Authenticate a user in the application.
 *
 * @param {string} token The token to authenticate the retrieve user.
 * @param {function} callback The callback function to manage the response.
 * 
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */

function retrieveUser(id, callback) {
    readFile(`${__dirname}/../users.json`, 'utf8', (error, json) => {
        if (error) return callback(error)

        const users = JSON.parse(json)

        const index = users.findIndex(user => user.id === id)

        if (index < 0) return callback(new Error(`User with id ${id} not found`))

        const user = users[index]
        delete user.password
        delete user.id


        callback(null, user)

    })
}

module.exports = retrieveUser