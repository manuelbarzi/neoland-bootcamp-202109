const { models: { User } } = require('mynutrition-data')
const { NotFoundError } = require('mynutrition-errors')

async function retrieveUsersForEmail() {
    
    var users = await User.find({}).lean()
    
    if (!users)
        throw new NotFoundError(`Database is empty`)

    for (let i = 0; i < users.length; i++) {
        users[i].id = users[i]._id.toString()
        delete users[i]._id
        delete users[i].password
        delete users[i].__v
        delete users[i].role
    }

    return users
}

module.exports = retrieveUsersForEmail