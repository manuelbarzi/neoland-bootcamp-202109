const { readFile } = require('fs')

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