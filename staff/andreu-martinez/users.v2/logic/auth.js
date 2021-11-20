const jwt = require('jsonwebtoken')
const { readFile, writeFile} = require('fs')

const auth = (user, SECRET, callback) => {
    const{email: _email, password: _password}

    readFile(`${__dirname}/../users.json`, 'utf8', (error, json) => {
        if(err){callback(new Error(err.message))}

        const users = JSON.parse(json)
        const {id} = users.find(({email}) => email === _email)

        if(!id) return callback(new Error('User not found'))

        const token = jwt.sign({sub: data.id, exp: Math.floor(Date.now() /100) +3600}, SECRET)
        callback(null,token)
    })
}

module.exports = auth