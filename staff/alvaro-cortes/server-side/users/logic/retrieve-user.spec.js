const { expect } = require('chai')
const retrieveUser = require('./retrieve-user')
const { readFile, writeFile } = require('fs')

describe('retrieveUser', () => {
    let user;

    beforeEach(done => {
        user = {
            id: '1234',
            name: 'Wendy Pan',
            username: 'wendypan'
        }

        const users = [user]

        writeFile('./users.json', JSON.stringify(users), done)
    })

    it('Should succed with correct id', done => {
        const id = '1234'

        retrieveUser(id, (error, user2) => {
            if (error) return done(error)

            readFile('./users.json', 'utf8', (error) => {
                if (error) return done(error)

                expect(user2).to.exist
                expect(user.name).to.equal(user2.name)
                expect(user.username).to.equal(user2.username)

                done()
            })
        })

        afterEach(done => {
            writeFile('./users.json', '[]', done)
        })
    })
})