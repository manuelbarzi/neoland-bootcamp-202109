const context = require('./context')
const { ObjectId } = require('mongodb')

function modifyUser(id, data, callback) { // data => { name: ?, username: ?, password: ? }
    // TODO implement me
debugger
        const users = context.db.collection('users')

        let foundUser

        users.findOne({_id: ObjectId(id)},(error,user)=>{
            if(error) return callback(error)

            if(!user) return callback(new Error(`No user with the id: ${id}`))

            foundUser = user
        })


        const { username, password, newPassword} = data

        if (username) {
            users.findOne({username},(error,user)=>
            {
                if(error) return callback(error)
                if(user) return callback(new Error('That username already exists'))
                foundUser.username = username
            })
            
        }
        if (newPassword) {
            if (password!==foundUser.password) {return callback(new Error(`Wrong credentials to change password`))} 
            foundUser.password = newPassword
        }

        for (const property in data)
            if (property !== 'username' && property !== 'newPassword' && property !== 'password')
                foundUser[property] = data[property]

        users.updateOne({_id: ObjectId(id)}, { $set: {foundUser}});

        foundUser.id=foundUser._id.toString()
        delete foundUser._id
        delete foundUser.password
        
        return callback(null,foundUser)
}

module.exports = modifyUser


// Modificar