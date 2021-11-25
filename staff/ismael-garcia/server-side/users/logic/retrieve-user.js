const context = require('./context')
const { ObjectId } = require('mongodb')

function retrieveUser(id, callback) {
    if (typeof id !== 'string') throw new TypeError('id is not a string')
    if (!id.trim().length) throw new Error('id is empty or blank')
    if (/\r?\n|\r|\t| /g.test(id)) throw new Error('id has blank spaces')
    if (id.length !== 24) throw new Error('id does not have 24 characters') // mongo ids tienen 24 caracteres

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')
    
    const users = context.db.collection('users')

    users.findOne({ _id: ObjectId(id) }, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new Error(`user with id ${id} not found`))

        user.id = user._id.toString()
        delete user._id // el proceso de estas dos líneas se conoce como saneamiento de datos

        delete user.password

        callback(null, user)
    })
}

module.exports = retrieveUser