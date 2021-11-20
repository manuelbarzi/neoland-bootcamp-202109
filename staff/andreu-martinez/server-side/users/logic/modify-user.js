const { readFile, writeFile } = require('fs')

function modifyUser(id, data, callback) {
    readFile(`${__dirname}/../users.json`, 'utf8', (error, json) => {
        if (error) return callback(error)

        const users = JSON.parse(json)

        const index = users.findIndex(element => element.id === id)

        const user = users[index]

        if (!user) return callback(new Error('User doesnt exists'))

        if (data.name !== '.') user.name = data.name
        if (data.username !== '.') user.username = data.username
        if (data.oldpassword !== '.') {
            if (data.oldpassword === user.password) user.password = data.newpassword
            else return callback(new Error('Wrong credentials'))
        }

        users[index] = user
        const json2 = JSON.stringify(users, 'null', 4)

        writeFile(`${__dirname}/../users.json`, json2, (error)=>{
            if(error) return callback(error)
            callback(null)
        })
    })
}

module.exports = modifyUser