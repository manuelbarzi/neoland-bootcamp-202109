const {readFile, writeFile} = require('fs')

const register = (user, callback) => {
    const {name: _name, username: _username, email: _email, password: _password} = user

    readFile('./users.json', 'utf8', (err, json) => {
        const users = JSON.parse(json)
        const duplicateUser = users.find(({email}) => email === _email)
        if (duplicateUser) callback(err, null)
        else {
            const newUsers = users
            newUsers.push({_name, _username, _email, _password})
            const newJson = JSON.stringify(newUsers)
            writeFile('./users.json', newJson, 2, err => {
                if (err) callback(err, null)
                else callback(null, true)
            })
        }
    })
}

module.exports = register