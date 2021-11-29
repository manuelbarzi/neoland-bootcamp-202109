const { MongoClient, ObjectId } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')

const {createUser, updateUser, findUser, deleteUser} = require('./logic-mongo')

client.connect(error => {
    if (error) return console.error(error)
    const demo = client.db('demo')
    const users = demo.collection('users')



    const updateUser = (id, data, callback) => {
        // Necesitamos comprobar si id es correcto, data es correcto y callback es una función
        // Comprobaciones síncronas
    
        // Apuntamos a la colleción de la bbdd

        const {username, password, newPassword} = data
        if(username) {
            users.findOne({username}, (err, user) => {
                if(err) return callback(err)
                if(user) callback(new Error('Este usuario ya está registrado en la BBDD'))
                else {
                     // Caso username y password
                    if (password || newPassword) {
                        users.findOne({_id: new ObjectId(id)}, (err, user) => {
                            if(err) return callback(err)
                            if (!user) return callback(new Error('Este usuario no existe'))
                            if(user.password == password) {
                                data.password = data.newPassword
                                delete data.newPassword
                                users.updateOne({_id : new ObjectId(id)}, {$set: data}, err => {
                                    if(err) return callback(err)
                                    callback(null, "Tus datos se han actualizado correctamente")
                                })
                            }
                            else callback(new Error('Contraseña incorrecta'))
                        })
                    }
                    // Caso solo de cambiar username
                    else {
                        users.updateOne({_id : new ObjectId(id)}, {$set: data}, err => {
                            if(err) return callback(err)
                            callback(null, "Tus datos se han actualizado correctamente")
                        })
                    }
                }
            })
        }
        // Caso de solo password
        else if (password || newPassword) {
            users.findOne({_id: new ObjectId(id)}, (err, user) => {
                if(err) return callback(err)
                if (!user) return callback(new Error('Este usuario no existe'))
                if(user.password == password) {
                    data.password = data.newPassword
                    delete data.newPassword
                    users.updateOne({_id : new ObjectId(id)}, {$set: data}, err => {
                        if(err) return callback(err)
                        callback(null, "Tus datos se han actualizado correctamente")
                    })
                }
                else callback(new Error('Contraseña incorrecta'))
            })
        }
        // Caso sin username ni password
        else {
            users.updateOne({_id : new ObjectId(id)}, {$set: data}, err => {
                if(err) return callback(err)
                callback(null, "Tus datos se han actualizado correctamente")
            })

        }
    }

    // Caso de username y password
    // const id = "619e6ddfc478f298fba9ec48"
    // const data = {username: "usuario5", password: "nuevaPassword", newPassword: "123456"}
    // updateUser(id, data, (err, res) => {
    //     if (err) console.error(err.message)
    //     else console.log(res)
    // })

    // Caso de username
    // const id = "619e6ddfc478f298fba9ec48"
    // const data = {username: "usuario1"}
    // updateUser(id, data, (err, res) => {
    //     if (err) console.error(err.message)
    //     else console.log(res)
    // })

    // Caso de solo password
    const id = "619e6ddfc478f298fba9ec48"
    const data = {password: "nuevaPassword", newPassword: "654321"}
    updateUser(id, data, (err, res) => {
        if (err) console.error(err.message)
        else console.log(res)
    })

})

// No se puede tener 2 ususarios con mismo username
// No podemos modificar la contraseña sin comprobarla antes
// Podemos modificar un número indeterminado de cosas
// podemos eliminar propiedades ya existentes


// Primero necesito hacer un find para ver los datos del usuario que quiero modificar
// Esto me dará la info que necesito para saber su contraseña y comrpobarla si quiere cambiarla
// Y tendré que hacer otro find también para saber si existe otro usuario con ese username
