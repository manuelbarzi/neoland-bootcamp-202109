const { expect } = require('chai')
const registerUser = require('./register-user')

// Palabras clave, describe, it expect, to, be, equals done, before, beforeEach, after, exists

describe("register-user", () => {
    it('should create a new user (status 201)', done => {
        // crear un usuario con datos
        // meter esos datos en la llamada y compruebas
        const name = "Marvel"
        const username = "Marvelius"
        const email = "marvel@mail.com"
        const password = "123456"

        registerUser(name,username,email,password,(err, res /*confirmación*/) => {
            // Esperamos que err sea null y que res sea 'usuario registrado correctamente'
            expect(err).to.equals(null)
            expect(res).to.equals('usuario registrado correctamente')
            done()
        })

    })
    after(() =>{})
})