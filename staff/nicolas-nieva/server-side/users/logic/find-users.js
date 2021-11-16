const {readFile} = require ('fs')

function findUsers(query, callback) {
    readFile ('./users.json', 'utf8', (error, json) =>{
        if(error) return callback (error)

        const users = JSON.parse(json)

        let query1 = query.toLowerCase()

        const results = users.filter (({name, username, password}) => name.toLowerCase().includes(query1) 
        || username.toLowerCase().includes(query1) 
        || password.toLowerCase().includes(query1))

     callback (null, results)

    })
}

module.exports = findUsers