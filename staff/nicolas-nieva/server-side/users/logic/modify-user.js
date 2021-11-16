const {readFile, writeFile} = require ('fs')

function modifyUser(id, name, username, password, oldpassword, callback) { // data => { name: ?, username: ?, password: ? }
    readFile ('./users.json', 'utf8', (error, json) =>{
        if (error) return callback (error.message)

        const users = JSON.parse (json)

        const user = users.find(usuario => usuario.id === id)

        if (!user) return callback(new Error ('user not found'))

        const newName = name
        const newUsername = username
        const newPassword = password

        if (newName !== '.') user.name = newName
        if (newUsername !== '.') user.username = newUsername
        if (newPassword !== '.' && oldpassword === user.password) user.password = newPassword

        const json2 = JSON.stringify (users,null, 4)

        writeFile ('./users.json', json2, error => {
            if (error) return callback (error.message)

            callback(null, user)
        })
    

    })
}

module.exports = modifyUser