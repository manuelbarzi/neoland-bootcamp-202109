const { readFile, writeFile } = require('fs')

function modifyUser(id, name, username, password, callback) { // data => { name: ?, username: ?, password: ? }
    readFile(`${__dirname}/../users.json`, 'utf8', (error, json) => {
        if (error) return callback(error)

        const users = JSON.parse(json)

        const user = users.find(user => user.id == id)

        if (!user) return callback(new Error(`no user with id ${id} found`))

        if (name !== '.') user.name = name // Short circuit version: name !== '.' && (contact.name = name)
        if (username !== '.') user.username = username
        if (password !== '.')  user.password = password

        const json2 = JSON.stringify(users, null, 4)

        writeFile(`${__dirname}/../users.json`, json2, error => {
            if (error) return callback(error)

            callback(null)
        })
    })
}

module.exports = modifyUser