const context = require('./context')

function authenticateUser(username, password, callback) {
    if (!typeof username === 'string') {throw new TypeError( username + ' is not a string')}
    if (!username.trim().length) throw new Error('Username is empty')
    if (username.length < 4) {throw new Error ('Username is to short')}

    if (!typeof password === 'string') {throw new TypeError(password +' is not a string')}
    if (!password.trim().length) throw new Error('Password is empty')
    if (/\r?\n|\r|\t| /g.test(password)) throw new Error('Password has blank spaces')
    if (password.length < 5) {throw new Error ('Password has less than five characters')}

    if (!typeof callback === 'function') {throw new TypeError(callback + 'is not a function')}

    const users = context.db.collection('users')

    users.findOne({username, password},(error,user) => {
        if (error) return callback(error)
        if (!user) return callback(new Error ('No user found with those credentials'))

        callback(null, user._id.toString())
    })


}
module.exports = authenticateUser