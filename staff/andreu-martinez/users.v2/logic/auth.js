const jwt = require('jsonwebtoken')
const { readFile} = require('fs')

const auth = (user, SECRET, callback) => {
    const{email: _email, password: _password, id: _id} = user

    if (typeof _email !== 'string') throw new TypeError('_email is not a string')
    if (!_email.trim().length) throw new Error('_email is empty or blank')
    if (/\r?\n|\r|\t| /g.test(_email)) throw new Error('_email has blank spaces')
    if (_email.length < 4) throw new Error('_email has less than 4 characters')

    if (typeof _password !== 'string') throw new TypeError('password is not a string')
    if (!_password.trim().length) throw new Error('password is empty or blank')
    if (/\r?\n|\r|\t| /g.test(_password)) throw new Error('password has blank spaces')
    if (_password.length < 8) throw new Error('password has less than 8 characters')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')


    readFile(`${__dirname}/../users.json`, 'utf8', (error, json) => {
        if(error){callback(new Error(err.message))}

        const users = JSON.parse(json)
        const user = users.find((element) => element.email === _email && element.password === _password)
        if(!user) return callback(new Error('Wrong credentials'))
        const id = user.id
        if(!id) return callback(new Error('User not found'))

        const token = jwt.sign({sub: id, exp: Math.floor(Date.now() /1000) +3600}, SECRET)
        return callback(null,token)
    })
}

module.exports = auth