// El paquete requerido para conectarse con Mongo
const { MongoClient, ObjectId } = require('mongodb')
// El puerto en el que se encuentra alojada la bbdd en local
const client = new MongoClient('mongodb://localhost:27017')

// Librería con vuestras funciones
const {createUser, updateUser, findUser, deleteUser} = require('./logic-mongo.1')

// Configuración inicial de Mongo
client.connect(error => {
    if (error) return console.error(error)
    // Delcaración de la BBDD a la que apunta nuestro programa
    const demo = client.db('demo')
    // La coleción específica
    const usersCollection = demo.collection('users')
    usersCollection.createIndex({ username: 1 }, { unique: true })



    // ----- Demo de createUser ------
    // const user = 'Ventu'
    // const user = { name: 'Ventu'}
    // const user = { name: 'Coco drilo', username: 'cocodrilo', password: '123123123 '}
    
    // createUser(usersCollection, user, (err, users) => {
    //     if(err) console.error(err)
    //     console.table(users)
    // })
        
    // ----- Demo de updateUser -----
    const find = {_id : new ObjectId("619e6ddfc478f298fba9ec48")}
    // const data = {username: 'xFNighTMaRe', password: '12345678'}
    const data = { name: 'Ventu', nuevaPropiedad: "Hola Sergio"}


    updateUser(usersCollection, find, data, (err, users) => {
        if(err) console.error(err)
        console.table(users)
    })

    // ----- Demo de findUser -----
    // const search = {name: 'Coco Drilo', username: 'coco'}

    // findUser(usersCollection, search, (err, users) => {
    //     if (err) console.error(err)
    //     else console.table(users)
    // })

    // ----- Demo de deleteUser -----
    // const search = {username: 'coco'}

    // deleteUser(usersCollection, search, (err, users) => {
    //     if (err) console.error(err)
    //     else console.table(users)
    // })
})