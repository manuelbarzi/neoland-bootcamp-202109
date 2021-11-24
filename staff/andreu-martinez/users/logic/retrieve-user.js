const context = require('./context')
const { ObjectId } = require('mongodb')

function retrieveUser(id, callback) {
    if (typeof id !== 'string') throw new TypeError(id + ' is not a string')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    const users = context.db.collection('users')

    users.findOne({_id: ObjectId(id)},(error,user)=>{
        if(error) return callback(error)

        if (!user) return callback(new Error(`No user with the id: ${id}`))

        user.id=user._id.toString()
        delete user._id
        delete user.password
        
        callback(null, user)
    })
}
module.exports = retrieveUser