const {readFile, writeFile} = require('fs')
const jwt = require('jsonwebtoken')

const changepassword = (user, private_info, callback) => {
    const {id, email: _email, password: _password, newPassword: _newPassword = ""} = user
    const {token: _token, SECRET: _SECRET} = private_info

    let _payload={}
    jwt.verify(_token, _SECRET, (error,payload) =>{
        if(error) return callback(error.message)
        _payload=payload
    })

    if(!_payload) return callback(new Error("Incorrect token"))
    const {sub,exp} = _payload
    if(sub != id) return callback(new Error('Invalid Token'))
    
    if(exp < Math.floor(Date.now()/1000)) return callback(new Error('Token expired'))

    readFile(`${__dirname}/../users.json`, 'utf-8', (err, json) => {
        if (err) return callback(err)
        else {
            const users = JSON.parse(json)
            const userIndex = users.findIndex(({email}) => email === _email)
            const user = users.find(({email}) => email === _email)
            if (userIndex < 0) return callback(new Error('User not found'))
            else if (!(user.password === _password)) return callback(new Error('Wrong credentials'))
            else if (!_newPassword || _newPassword.length < 1) return callback(new Error('New Password is empty'))
            else {
                const {id, name, username, email, password} = users[userIndex]
                users[userIndex] = {
                    id,
                    name,
                    username,
                    email,
                    password: _newPassword
                }
                const newJson = JSON.stringify(users, null, 4)
                writeFile(`${__dirname}/../users.json`, newJson, () => {
                    if (err) return callback(err)
                    else return callback(null, user)
                })
            }
        }
    })

}

module.exports = changepassword