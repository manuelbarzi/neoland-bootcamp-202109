const { MongoClient, ObjectId } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017')

client.connect(error => {
    if (error) return console.error(error)
    const demo = client.db('demo')
    const users = demo.collection('users')

    const modifyUser = (id, data, callback) => {
        // Manejamos los errores síncronos

        // Definimos la base de datos

        users.findOne({_id: new ObjectId(id)}, (err, user) => {
            if (err) return callback(err)
            if (!user) null
        })
    }

    const id = "619e6ddfc478f298fba9ec48"
    const data = {password: "nuevaPassword", newPassword: "654321"}
    modifyUser(id, data, (err, res) => {
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
