const { readFile, writeFile } = require ('fs')

function modifyUser(id, name, username, oldPassword, newPassword, callback) { // data => { name: ?, username: ?, password: ? }
    readFile (`${__dirname}/../../users.json`, 'utf8', (error, json) =>{
        if (error) return callback (error.message)

        const users = JSON.parse(json)

        const user = users.find(user => user.id === id)

        if (!user) return callback(new Error (`User with ${id} not found`))

        if (name !== '.' && name !== "") user.name = name
        if (username !== '.' && username !== "")user.username = username
        if (oldPassword !== '.' && newPassword !== "." && oldPassword === user.password) user.password = newPassword

        const json2 = JSON.stringify (users,null, 4)

        writeFile (`${__dirname}/../../users.json`, json2, error => {
            if (error) return callback (error.message)

            callback(null, user)
        })
    })
}

module.exports = modifyUser

