const { expect } = require('chai')
const registerUser = require('./register-user')
const { MongoClient } = require('mongodb')
const context = require('./context')

describe('registerUser', () => {
    let client, db, users

    before(done => {
        client = new MongoClient('mongodb://localhost:27017')

        client.connect(error => {
            if (error) return done(error)

            db = client.db('demo')

            context.db = db

            users = db.collection('users')

            users.createIndex({ username: 1}, { unique: true })

            done()
        })
    })

    beforeEach(done => {

        users.deleteMany({}, done)
    })

    it('Should succeed with new user', done => {
        const name = 'Wendy Pan'
        const username = 'wendypan'
        const password = '123123123'

        registerUser(name, username, password, error => {
            if (error) return done(error)

            users.findOne({ username }, (error, user) => {
                if (error) return done(error)

                expect(user).to.exist
                expect(user.name).to.equal(name)
                expect(user.username).to.equal(username)
                expect(user.password).to.equal(password)

                done()
            })
        })
    })

    describe('When user already exists', () => {
        let user;

        beforeEach(done => {
            user = {
                name: 'Wendy Pan',
                username: 'wendypan',
                password: '123123123'
            }

            users.insertOne(user, done)
        })

        it('Should fail when user already exists', done => {
            const { name, username, password } = user
            
            registerUser(name, username, password, error => {
                expect(error).to.exist
                expect(error.message).to.equal(`User with username ${username} already exists.`)

                done()
            })
        })
    })

    describe('When parameters are not valid.', () => {
        describe('When name is not valid.', () => {
            it('Should fail when name is not a string.', () => {
                expect(() => registerUser(true, 'wendypan', '123123123', () => { })).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser(123, 'wendypan', '123123123', () => { })).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser({}, 'wendypan', '123123123', () => { })).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser(() => { }, 'wendypan', '123123123', () => { })).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser([], 'wendypan', '123123123', () => { })).to.throw(TypeError, 'name is not a string')
            })

            it('Should fail when name is empty', () => {
                expect(() => registerUser('', 'wendypan', '123123123', () => { })).to.throw(Error, 'name is empty or blank')

                expect(() => registerUser('   ', 'wendypan', '123123123', () => { })).to.throw(Error, 'name is empty or blank')
            })

            it('Should fail when name has spaces around', () => {
                expect(() => registerUser(' Wendy Pan ', 'wendypan', '123123123', () => { })).to.throw(Error, 'blank spaces around name')
            })
        })

        describe('When username is not valid', () => {
            it('Should fail when username is not a string', () => {
                expect(() => registerUser('Wendy Pan', true, '123123123', () => { })).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', 123, '123123123', () => { })).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', {}, '123123123', () => { })).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', () => { }, '123123123', () => { })).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', [], '123123123', () => { })).to.throw(TypeError, 'username is not a string')

            })

            it('Should fail when username is empty', () => {
                expect(() => registerUser('Wendy Pan', '', '123123123', () => { })).to.throw(Error, 'username is empty or blank')

                expect(() => registerUser('Wendy Pan', '  ', '123123123', () => { })).to.throw(Error, 'username is empty or blank')
            })

            it('Should fail when username has spaces around', () => {
                expect(() => registerUser('Wendy Pan', ' wendypan ', '123123123', () => { })).to.throw(Error, 'username has blank spaces')
                
                expect(() => registerUser('Wendy Pan', 'wendy pan', '123123123', () => { })).to.throw(Error, 'username has blank spaces')
            })
        })

        describe('When password is not valid', () => {
            it('Should fail when password is not a string', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', true, () => { })).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', 123, () => { })).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', {}, () => { })).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', () => { }, () => { })).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', [], () => { })).to.throw(TypeError, 'password is not a string')
            })

            it('Should fail when password is empty', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', '', () => { })).to.throw(Error, 'password is empty or blank')

                expect(() => registerUser('Wendy Pan', 'wendypan', '   ', () => { })).to.throw(Error, 'password is empty or blank')
            })

            it('Should fail when password has spaces around', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', ' 123123123 ', () => { })).to.throw(Error, 'password has blank spaces')
                
                expect(() => registerUser('Wendy Pan', 'wendypan', '1231 23123', () => { })).to.throw(Error, 'password has blank spaces')
            })

            it('Should fail when password length is less than 8 characters', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', '1231', () => { })).to.throw(Error, 'password has less than 8 characters')
            })
        })

        describe('When callback is not valid', () => {
            it('Should fail when callback is not a string', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123', true)).to.throw(TypeError, 'callback is not a function')
                
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123', 123)).to.throw(TypeError, 'callback is not a function')
                
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123', {})).to.throw(TypeError, 'callback is not a function')
                
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123', '...')).to.throw(TypeError, 'callback is not a function')
                
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123', [])).to.throw(TypeError, 'callback is not a function')
            })
        })
    })

    after(done => {

        client.close(done)
    })
})