const {readFile} = require('fs')
const jwt = require('jsonwebtoken')

const retrieve = (user, private_info, callback) => {
    const {id,email: _email, password: _password} = user
    const {token: _token, SECRET: _SECRET} = private_info

    let _payload={}
    jwt.verify(_token, _SECRET, (error,payload) =>{
        if(error) return callback(new Error(error.message))
        _payload=payload
    })

    if(!_payload) return callback(new Error('Something went wrong'))
    const {sub, exp} = _payload
    if(sub != id) return callback(new Error('Invalid Token'))
    if(exp < Math.floor(Date.now()/1000)) return callback(new Error('Token expired'))

    readFile(`${__dirname}/../users.json`, 'utf-8', (err, json) => {
        if (err) return callback(err)
        else {
            const users = JSON.parse(json)
            const user = users.find((element) => element.email === _email)
            if (!user) return callback(new Error('User not found'))
            else if (user.password !== _password) return callback(new Error('Wrong credentials'))
            else return callback(null, user)
        }
    })

}

module.exports = retrieve