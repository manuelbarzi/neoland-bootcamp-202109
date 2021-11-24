const {readFile, writeFile} = require('fs')
const jwt = require('jsonwebtoken')

const unregister = (user, private_info, callback) => {
    const { id, email: _email, password: _password} = user
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
        if (err) callback(err)
        else {
            const users = JSON.parse(json)
            const existsUser = users.some(({email}) => email === _email)
            if (!existsUser) callback(new Error('User not found'))
            else {
                const newUsers = users.filter(({email}) => email !== _email)
                const newJson = JSON.stringify(newUsers, null, 4)
                writeFile(`${__dirname}/../users.json`, newJson, () => {
                    if (err) callback(err)
                    else{
                        const _token = jwt.sign({sub: id, exp: 0}, _SECRET)
                        callback(null, _token)
                    }
                })
            }
        }
    })


}

module.exports = unregister