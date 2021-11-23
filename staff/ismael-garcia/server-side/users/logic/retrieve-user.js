const context = require('./context')

function retrieveUser(id, callback) {
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (!id.trim().length) throw new Error('id is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    
    const users = context.db.collection('users')

    users.findOne({ _id: id }, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new Error(`user with id ${id} not found`))

        callback(null, user)
    })
}

module.exports = retrieveUser