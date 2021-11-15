const { readFile } = require('fs')

function findUser(query, callback) {
    readFile('./users.json', 'utf8', (error, json) => {
        if (error) return callback(error)

        const users = JSON.parse(json)

        const match = users.filter(user => {
            for (const key in user) {
                const lowKey = key.toLowerCase()

                lowKey.includes(query)
            }
        })

        if (match === []) {
            console.log(`${query} not found`)
            
            return
        }

        console.log(match)
    })
}

module.exports = findUser