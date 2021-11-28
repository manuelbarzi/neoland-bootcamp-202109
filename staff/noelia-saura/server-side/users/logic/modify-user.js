const { ObjectId } = require('mongodb')
const context = require('./context')
const { validateId, validateData, validateCallback } = require('./helpers/validators')
const { NotFoundError, ConflictError, CredentialsError } = require('errors')

function modifyUser(id, data, callback) {
    validateId(id)
    validateData(data)
    validateCallback(callback)

    const users = context.db.collection('users')

    const filter = { _id: ObjectId(id) }

    users.findOne(filter, (error, user) => {
        if (error) return callback(error)
        if (!user) return callback(new NotFoundError(`user with id ${id} not found`))

        const { password, oldPassword } = data

        if (password) {
            if (oldPassword !== user.password)
                return callback(new CredentialsError('wrong password'))
            else
                delete data.oldPassword
        }

        users.updateOne(filter, { $set: data }, error => {
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

    // readFile(`${__dirname}/../users.json`,'utf8',(error,json)=>{
    //     if(error)return callback(error)

    //     const users=JSON.parse(json)
    //     const user=users.find(user=> user.id===id)

    //     if(!user)return callback(new Error(`user with id ${id} not found`))

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

    //     for (const property in data)
    //         if (property !== 'username' && property !== 'password' && property !== 'oldPassword')
    //             user[property] = data[property]

    //     const json2 = JSON.stringify(users, null, 4)

    //     writeFile(`${__dirname}/../users.json`, json2, error => {
    //         if (error) return callback(error)

    //         callback(null)
    //     })
    // })






// function modifyUser(id, name, username, password, callback) { // data => { name: ?, username: ?, password: ? }

//     readFile('./users.json', 'utf8', (error, json) => {
//         if (error) return callback(error)

//         const users = JSON.parse(json)

//         const user = users.find(user => user.id == id)

//         if (!user){
//             callback (new Error (`no user with id ${id} found`))
//         }else if(name!=='.'){
//             user.name=name
//         }else if(username!=='.'){
//             user.username=username
//         }else if(password !=='.'){
//             user.password=password
//         }
//         const json2 = JSON.stringify(users, null, 4)

//         writeFile('./users.json', json2, error => {
//             if (error) return callback(error)
//             callback(null)
//         })

//     // TODO implement me
// })

// }
// module.exports=modifyUser