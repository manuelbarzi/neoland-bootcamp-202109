const { expect } = require('chai')
const unregisterUser = require('./unregister-user')
const { MongoClient, ObjectId } = require('mongodb')
const context = require('./context')

describe('unregisterUser', () => {
    let client, db, users

    before(done => {
        client = new MongoClient('mongodb://localhost:27017')

        client.connect(error => {
            if (error) return done(error)

            db = client.db('demo')

            context.db = db

            users = db.collection('users')

            done()
        })
    })

    beforeEach(done => users.deleteMany({}, done))

    describe('When user already exists', () => {
        let user, userId
        debugger
        beforeEach(done => {
            user = {
                name: 'Wendy Pan',
                username: 'wendypan',
                password: '123123123'
            }

            users.insertOne(user, (error, result) => {
                if (error) return done(error)

                userId = result.insertedId.toString()

                done()
            })
        })
        
        it('Should succeed when user is deleted from data base', done => {
            const { password } = user

            unregisterUser(userId, password, (error, response) => {
                if (error) return done(error)

                expect(response).to.equal('User deleted successfully')

                done()
            })
        })

        it('Should fail with wrong password', done => {

            unregisterUser(userId, '11111111', error => {

                expect(error).to.exist
                expect(error.message).to.equal('Wrong password')

                done()
            })
        })

        it('Should fail when user id does not correspond to any user', done => {
            const userId = ObjectId().toString()

            const { password } = user
    
            unregisterUser(userId, password, error => {
                expect(error).to.exist
                expect(error.message).to.equal(`user with id ${userId} not found`)
    
                done()
            })
        })

        describe('When parameters are note valid', () => {
            describe('When id is not valid', () => {
                it('should fail when id is not a string', () => {
                    expect(() => unregisterUser(true, {}, () => { })).to.throw(TypeError, 'id is not a string')
    
                    expect(() => unregisterUser(123, {}, () => { })).to.throw(TypeError, 'id is not a string')
    
                    expect(() => unregisterUser({}, {}, () => { })).to.throw(TypeError, 'id is not a string')
    
                    expect(() => unregisterUser(() => { }, {}, () => { })).to.throw(TypeError, 'id is not a string')
    
                    expect(() => unregisterUser([], {}, () => { })).to.throw(TypeError, 'id is not a string')
                })
    
                it('should fail when id is empty or blank', () => {
                    expect(() => unregisterUser('', {}, () => { })).to.throw(Error, 'id is empty or blank')
    
                    expect(() => unregisterUser('   ', {}, () => { })).to.throw(Error, 'id is empty or blank')
                })
    
                it('should fail when id has spaces', () => {
                    expect(() => unregisterUser(' abcd1234abcd1234abcd1234 ', {}, () => { })).to.throw(Error, 'id has blank spaces')
    
                    expect(() => unregisterUser('abcd 1234abc d1234abc d1234', {}, () => { })).to.throw(Error, 'id has blank spaces')
                })
    
                it('should fail when id length is different from 24 characters', () => {
                    expect(() => unregisterUser('abc', {}, () => { })).to.throw(Error, 'id doesn\'t have 24 characters')
                })
            })

            describe('When password is not valid', () => {
                it('Should fail when password is not a string', () => {
                    expect(() => unregisterUser(userId, true, () => { })).to.throw(TypeError, 'password is not a string')
    
                    expect(() => unregisterUser(userId, 123, () => { })).to.throw(TypeError, 'password is not a string')
    
                    expect(() => unregisterUser(userId, {}, () => { })).to.throw(TypeError, 'password is not a string')
    
                    expect(() => unregisterUser(userId, () => { }, () => { })).to.throw(TypeError, 'password is not a string')
    
                    expect(() => unregisterUser(userId, [], () => { })).to.throw(TypeError, 'password is not a string')
                })
    
                it('Should fail when password is empty', () => {
                    expect(() => unregisterUser(userId, '', () => { })).to.throw(Error, 'password is empty or blank')
    
                    expect(() => unregisterUser(userId, '   ', () => { })).to.throw(Error, 'password is empty or blank')
                })
    
                it('Should fail when password has spaces around', () => {
                    expect(() => unregisterUser(userId, ' 123123123 ', () => { })).to.throw(Error, 'password has blank spaces')
                    
                    expect(() => unregisterUser(userId, '1231 23123', () => { })).to.throw(Error, 'password has blank spaces')
                })
    
                it('Should fail when password length is less than 8 characters', () => {
                    expect(() => unregisterUser(userId, '1231', () => { })).to.throw(Error, 'password has less than 8 characters')
                })
            })

            describe('When callback is not valid', () => {
                it('Should fail when callback is not a string', () => {
                    expect(() => unregisterUser(userId, '123123123', true)).to.throw(TypeError, 'callback is not a function')
                    
                    expect(() => unregisterUser(userId, '123123123', 123)).to.throw(TypeError, 'callback is not a function')
                    
                    expect(() => unregisterUser(userId, '123123123', {})).to.throw(TypeError, 'callback is not a function')
                    
                    expect(() => unregisterUser(userId, '123123123', '...')).to.throw(TypeError, 'callback is not a function')
                    
                    expect(() => unregisterUser(userId, '123123123', [])).to.throw(TypeError, 'callback is not a function')
                })
            })
        })
    })

    after(done => users.deleteMany({}, error => {
        if (error) return done(error)

        client.close(done)
    }))
})