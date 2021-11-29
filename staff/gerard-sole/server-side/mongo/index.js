const { MongoClient, ObjectId } = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')

const {createUser, updateUser, findUser, deleteUser} = require('./logic-mongo')

client.connect (error => {
    if (error) return console.error (error)

    const demo = client.db ('demo')

    const usersCollection = demo.collection('users')

    const user = { name: 'Coco Drilo', username: 'cocodrilo', password: 'asdasdasd'}
    createUser (usersCollection, user, (err, users) => {
        if(err) console.error(err)
        console.table(users)
    })

    updateUser(usersCollection, 'pepegri', 444 , (err, users) => {
        if (err) console.error(err)
        console.table(users)
    } )

    const id = new ObjectId("619b7902b9d1f7c7a522a56e")
    findUser (usersCollection, id, (err, users) =>{
        if (err) console.error(err)
        console.table (users)
    } )

    deleteUser (usersCollection, id, (err,users) =>{
        if (err) console.error(err)
        console.table (users)
    })
})