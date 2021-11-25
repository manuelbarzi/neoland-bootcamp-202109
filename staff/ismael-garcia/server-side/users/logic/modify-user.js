const context = require('./context')
const { ObjectId } = require('mongodb')
const { validateId, validateData, validateCallback } = require('./helpers/validators')
const { NotFoundError, ConflictError, CredentialsError } = require('errors')

/**
 * TODO doc me
 * @param {*} id 
 * @param {*} data 
 * @param {*} callback 
 */
function modifyUser(id, data, callback) { // data => { username: ?, password: ?, oldPassword: ? }
    validateId(id)
    validateData(data)
    validateCallback(callback)
    
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

        if (!user) return callback(new NotFoundError(`user with id ${id} not found`))

        // const { name, username, password, newPassword } = data 
    
        if (data.password !== user.password) return callback(new CredentialsError('wrong password')) 
        
        if (data.newPassword) {
            data.password = data.newPassword 

            delete data.newPassword 
        }
            

        users.updateOne({ _id: ObjectId(id) }, { $set: data }, error => {
            if (error) {
                if (error.code === 11000)
                    callback(new ConflictError(`user with username ${data.username} already exists`))
                else
                    callback(error)

                return 
            }

            callback(null)
        })
    })
}

module.exports = modifyUser