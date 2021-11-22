const { MongoClient, ObjectId } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')

const { createUser, updateUser, findUser, deleteUser } = require('./logic-mongo')

client.connect(error => {
    if (error) return console.error(error)
    // Declaración de la BBDD a la apunta nuestro programa
    const demo = client.db('demo')
    // La colección específica
    const usersCollection = demo.collection('users')

    // Demo de createUser
    const user = { name: 'Coco Drilo', username: 'cocodrilo', password: '123456789' }

    createUser(usersCollection, user)
        .then(users => console.log(users))
        .catch(error => console.error(error))

    updateUser(usersCollection, user.username, 36)
        .then(users => console.log(users))
        .catch(error => console.error(error))

    const id = new ObjectId("619bb46e95d66423be1318d8")

    findUser(usersCollection, id)
        .then(users => console.log(users))
        .catch(error => console.error(error))

    deleteUser(usersCollection, id)
        .then(users => console.log(users))
        .catch(error => console.error(error))
})