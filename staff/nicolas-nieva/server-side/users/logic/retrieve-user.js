const {readFile} = require ('fs')

function retrieveUser(id, callback) {
    readFile (`${__dirname}/../../users.json`, 'utf8', (error, json) =>{
        if (error) return callback (error)

        const users = JSON.parse(json)

        const userindex = users.findIndex(user => user.id === id)

        const user = users[userindex]
        delete user.password
        delete user.id

        if(userindex < 0) return callback(new Error(`No user with that ${id}`))

        callback (null, user)
        
    })
}



module.exports = retrieveUser