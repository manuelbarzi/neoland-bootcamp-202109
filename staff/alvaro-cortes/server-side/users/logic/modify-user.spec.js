const { expect } = require('chai')
const modifyUser = require('./modify-user')
const { readFile, writeFile } = require('fs')

describe('modifyUser', () => {
    let user;

    beforeEach(done => {
        user = {
            id: '1234',
            name: 'Wendy Pan',
            username: 'wendypan',
            password: '123456789'
        }

        const users = [user]

        writeFile('./users.json', JSON.stringify(users), done)
    })

    it('Should succeed with modifided user', done => {
        let data = {
            name: 'Peter Pan',
            username: "peterpan"
        }
        const id = '1234'

        modifyUser(id, data, error => {
            if (error) return done(error)

            readFile('./users.json', 'utf8', error => {
                if (error) return done(error)

                expect(user).to.exist

                done()
            })
        })
    })
    afterEach(done => {
        writeFile('./users.json', '[]', done)
    })
})