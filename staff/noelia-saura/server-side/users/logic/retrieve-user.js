const context = require('./context')
const { ObjectId } = require('mongodb')
const {validateId,validateCallback}=require('./helpers/validators')
const{NotFoundError}=require('errors')

function retrieveUser(id, callback) {
    validateId(id)
    validateCallback(callback)

    const users = context.db.collection('users')

    users.findOne({ _id: ObjectId(id) }, (error, user) => {
        if (error) return callback(error)

        if (!user) return callback(new NotFoundError(`user with id ${id} not found`))

        user.id = user._id.toString()
        delete user._id

        delete user.password

        callback(null, user)
    })



    // readFile(`${__dirname}/../users.json`,'utf8',(error,json)=>{
    //     if(error)return callback(error)

    //     const users=JSON.parse(json)

    //     const user=users.find(user=>user.id===id)

    //     if (!user) return callback(new Error(`user with id ${id} not found`))
    //     delete user.id
    //     delete user.password
    //     return callback(null,user)
    // })

}

module.exports = retrieveUser