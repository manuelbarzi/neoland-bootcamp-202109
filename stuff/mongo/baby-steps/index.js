const { MongoClient, ObjectId } = require('mongodb') // El paquete requerido para conectarse con Mongo

const client = new MongoClient('mongodb://localhost:27017') // El puerto en el que se encuentra alojada la bbdd en local

const { createUser, updateUser, findUser, deleteUser } = require('./logic-mongo') // Librería con vuestras funciones

// Configuración inicial de Mongo
client.connect(error => {
    if (error) return console.error(error)// Delcaración de la BBDD a la que apunta nuestro programa

    const demo = client.db('demo')// La coleción específica

    const usersCollection = demo.collection('users')

    // CREATEUSER

    // const user={ name: 'Coco Drilo',username: 'cocodrilo',password:'123123123'}
    // createUser(usersCollection, user)
    // .then(user=>console.table(user))
    // .catch(err=> console.error(err))

    //SEARCH USER
    // const search = { name: 'Coco Drilo' }

    // findUser(usersCollection, search)
    //     .then(users => console.table(users))
    //     .catch(err = console.error(err))

    //DELETE USER

    const search={username:'cocodrilo'}

    deleteUser(usersCollection, search)
    .then(users => console.table(users))
    .catch(err => console.error(err))


    //UPDATE USER

    // const find={_id:new ObjectId("619bb40224519e9c6d84e453")}
    // const data={username:'Poppy',password:'12341234'}

    // updateUser(usersCollection,find,data)
    // .then(users=>console.table(users))
    // .catch(err=>console.error(err))


})