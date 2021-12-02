const { model } = require('mongoose')
const { user } = require('./schemas')

module.exports = {
    User: model('User', user)
}

// Los modelos nos permiten instanciar objetos con new con funciones asociadas (método)
// estas funciones asociadas son (las más importantes): `model.create()`, `model.update()`, `model.find()`, `model.delete()`
// enlace a todos los métodos de los modelos de mongo https://mongoosejs.com/docs/api/model.html

// En los modelos tenemos incluido el contexto (base de datos y colección)