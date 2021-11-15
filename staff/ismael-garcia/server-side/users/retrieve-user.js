const { readFile } = require('fs')

function retrieveUser(id, callback) {
    readFile('./users.json', 'utf8', (error, json) => {
        if (error) return callback(error)

        const users = JSON.parse(json)

        const index = users.findIndex(user => user.id === id)

        if (index < 0) return callback(new Error(`user with id ${id} not found`))

        const user = users[index]

        console.log(user)
    })
}

module.exports = retrieveUser