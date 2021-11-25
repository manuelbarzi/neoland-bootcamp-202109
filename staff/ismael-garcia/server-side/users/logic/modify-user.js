const context = require('./context')
const { ObjectId } = require('mongodb')

/**
 * TODO doc me
 * @param {*} id 
 * @param {*} data 
 * @param {*} callback 
 */
function modifyUser(id, data, callback) { // data => { username: ?, password: ?, oldPassword: ? }
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (!id.trim().length) throw new Error('id is empty or blank')
    if (/\r?\n|\r|\t| /g.test(id)) throw new Error('id has blank spaces')
    if (id.length !== 24) throw new Error('id does not have 24 characters') // mongo ids tienen 24 caracteres

    if (typeof data !== 'object') throw new TypeError('data is not an object')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    
    // readFile(`${__dirname}/../users.json`, 'utf8', (error, json) => {
    //     if (error) return callback(error)

    //     const users = JSON.parse(json)

    //     const user = users.find(user => user.id == id)

    //     if (!user) return callback(new Error(`no user with id ${id} found`))

    //     const { username, password, oldPassword } = data 

    //     if (username) {
    //         const exists = users.some(user => user.username === username)

    //         if (exists) return callback(new Error('username already exists'))

    //         user.username = username 
    //     }

    //     if (password) {
    //         if (oldPassword !== user.password) return callback(new Error('wrong password'))

    //         user.password = password 
    //     }

    //     for (const key in data)
    //         if (key !== 'username'
    //         && key !== 'password'
    //         && key !== 'oldPassword')
    //             user[key] = data[key] // estudiar este statement

    //     const json2 = JSON.stringify(users, null, 4)

    //     writeFile(`${__dirname}/../users.json`, json2, error => {
    //         if (error) return callback(error)

    //         callback(null)
    //     })
    // })

    const users = context.db.collection('users')

    users.findOne({ _id: ObjectId(id) }, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new Error(`user with id ${id} not found`))

        const { username, password, oldPassword } = data 
    
        if (oldPassword !== user.password) return callback(new Error('wrong password')) 
        
        users.updateOne({ _id: ObjectId(id) }, { $set: { username, password } }, (error) => {
            if (error) return callback(error)

            callback(null)
        })
    })
}

module.exports = modifyUser