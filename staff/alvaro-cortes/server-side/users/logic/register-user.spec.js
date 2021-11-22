const { expect } = require('chai')
const registerUser = require('./register-user')
const { readFile, writeFile } = require('fs')

describe('registerUser', () => {
    beforeEach(done => {
        writeFile('./users.json', '[]', done)
    })

    it('Should succeed with new user', done => {
        const name = 'Wendy Pan'
        const username = 'wendypan'
        const password = '123123123'

        registerUser(name, username, password, error => {
            if (error) return done(error)

            readFile('./users.json', 'utf8', (error, content) => {
                if (error) return done(error)

                const users = JSON.parse(content)

                const user = users.find(user => user.username === username)

                expect(user).to.exist
                expect(user.name).to.equal(name)
                expect(user.username).to.equal(username)
                expect(user.password).to.equal(password)

                done()
            })
        })
    })

    afterEach(done => {
        writeFile('./users.json', '[]', done)
    })
    
    describe('When user already exists', () => {
        let user;

        beforeEach(done => {
            user = {
                id: '1234',
                name: 'Wendy Pan',
                username: 'wendypan',
                password: '123123123'
            }

            const users = [user]

            writeFile('./users.json', JSON.stringify(users), done)
        })

        it('Should fail when user already exists', done => {
            const { name, username, password } = user

            registerUser(name, username, password, error => {
                expect(error).to.exist
                expect(error.message).to.equal(`user with username ${username} already exists`)

                done()
            })
        })
    })

    describe('When parameters are incorrect', () => {
        describe('When name is incorrect', () => {
            it('Should fail when name is not a string', () => {
                expect(() => registerUser(true, 'wendypan', '123123123', () => {})).to.throw(TypeError, 'name is not a string')
                
                expect(() => registerUser(123, 'wendypan', '123123123', () => {})).to.throw(TypeError, 'name is not a string')
                
                expect(() => registerUser({}, 'wendypan', '123123123', () => {})).to.throw(TypeError, 'name is not a string')
                
                expect(() => registerUser(() => {}, 'wendypan', '123123123', () => {})).to.throw(TypeError, 'name is not a string')
                
                expect(() => registerUser([], 'wendypan', '123123123', () => {})).to.throw(TypeError, 'name is not a string')  
            })

            it('Should fail when name is empty', () => {
                
            })
        })
    })
})