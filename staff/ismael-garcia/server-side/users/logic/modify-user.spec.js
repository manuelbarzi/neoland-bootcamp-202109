const { expect } = require('chai')
const modifyUser = require('./modify-user')
const { MongoClient, ObjectId } = require('mongodb')
const context = require('./context')
const { CredentialsError, FormatError, ConflictError, NotFoundError } = require('errors') 

describe('modifyUser', () => {
    let client, db, users

    before(done => {
        client = new MongoClient('mongodb://localhost:27017')

        client.connect(error => {
            if (error) return done(error)

            db = client.db('demo')

            context.db = db 

            users = db.collection('users')
            
            users.createIndex({ username: 1 }, { unique: true })

            done()

        })
    })

    beforeEach(done => users.deleteMany({}, done))

    describe('when trying to update name, username or/and password for an existing user', () => {
        let user, userId 
    
        beforeEach(done => {
            user = {
                name: 'Wendy Pan',
                username: 'wendypan',
                password: '123123123'
            }
    
            users.insertOne(user, (error, result) => {
                if (error) return done(error)
    
                userId = result.insertedId.toString() // estudiar esta línea
    
                done()
            })
        })
    
        it('should suceed with existing id and correct password', done => {
            let { name, username, password } = user 

            name += '-updated'
            username += '-updated'
            const newPassword = password + '-updated'

            const data = { name, username, password, newPassword }
    
            modifyUser(userId, data, error => {
                if (error) return done(error)
    
                expect(error).to.be.null
    
                users.findOne({ _id: ObjectId(userId) }, (error, user) => {
                    if (error) return done(error) 
                    
                    expect(user.name).to.equal(name)
                    expect(user.username).to.equal(username)
                    expect(user.password).to.equal(newPassword)
    
                    done()
                })
            })
        })
    
        it('should fail with non-existing id', done => {
            const userId = ObjectId().toString()
            const { username, password } = user
    
            modifyUser(userId, { username, password }, error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`user with id ${userId} not found`)
    
                done()
            })
        })
    
        it('should fail with incorrect password', done => {
            let { username, password } = user

            password += '-wrong'

            const data = { username, password }
    
            modifyUser(userId, data, error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(CredentialsError)
                expect(error.message).to.equal('wrong password')
    
                done()
            })
        })

        it('should fail when trying to update the username to another that already exists', done => {
            const user2 = {
                name: 'Peter Pan',
                username: 'peterpan',
                password: '123123123'
            }

            users.insertOne(user2, error => { 
                if (error) return done(error)

                return 
            })

            const username = 'peterpan'
            const { password } = user

            modifyUser(userId, { username, password }, error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(ConflictError)
                expect(error.message).to.equal(`user with username ${username} already exists`)

                done()
            })
        })
    })

    describe('when parameters are not valid', () => {
        describe('when id is not valid', () => {
            it('should fail when id is not a string', () => {
                expect(() => modifyUser(true, { }, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => modifyUser(123, { }, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => modifyUser({}, { }, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => modifyUser(() => { }, { }, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => modifyUser([], { }, () => { })).to.throw(TypeError, 'id is not a string')
            })

            it('should fail when id is empty or blank', () => {
                expect(() => modifyUser('', { }, () => { })).to.throw(Error, 'id is empty or blank')

                expect(() => modifyUser('   ', { }, () => { })).to.throw(Error, 'id is empty or blank')
            })

            it('should fail when id has spaces', () => {
                expect(() => modifyUser(' abcd1234abcd1234abcd1234 ', { }, () => { })).to.throw(Error, 'id has blank spaces')

                expect(() => modifyUser('abcd 1234abc d1234abc d1234', { }, () => { })).to.throw(Error, 'id has blank spaces')
            })
        })

        describe('when data is not valid', () => {
            it('should fail when data is not an object', () => {
                expect(() => modifyUser('abcd1234abcd1234abcd1234', true, () => { })).to.throw(TypeError, 'data is not an object')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', 123, () => { })).to.throw(TypeError, 'data is not an object')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', '', () => { })).to.throw(TypeError, 'data is not an object')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', () => { }, () => { })).to.throw(TypeError, 'data is not an object')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', [], () => { })).to.throw(TypeError, 'data is not an object')
            })
        })

        describe('when callback is not valid', () => {
            it('should fail when callback is not a function', () => {
                const password = '123123123'

                expect(() => modifyUser('abcd1234abcd1234abcd1234', { password }, true)).to.throw(TypeError, 'callback is not a function')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', { password }, 123)).to.throw(TypeError, 'callback is not a function')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', { password }, {})).to.throw(TypeError, 'callback is not a function')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', { password }, '...')).to.throw(TypeError, 'callback is not a function')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', { password }, [])).to.throw(TypeError, 'callback is not a function')
            })
        })
    })

    after(done => client.close(done))
})