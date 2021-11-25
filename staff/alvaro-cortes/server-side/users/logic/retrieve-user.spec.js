const { expect } = require('chai')
const retrieveUser = require('./retrieve-user')
const { MongoClient, ObjectId } = require('mongodb')
const contex = require('./context')
const context = require('./context')

describe('retrieveUser', () => {
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

    beforeEach(done =>
        users.deleteMany({}, done)
    )

    let user, userId

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

    it('Should succed with correct id', done => {
        const { name, username } = user

        retrieveUser(userId, (error, user) => {
            if (error) return done(error)

            expect(user).to.exist
            expect(user.name).to.equal(name)
            expect(user.username).to.equal(username)

            done()

        })

        after(done => client.close(done))
    })

    it('Should fail when incorrect id', done => {
        const { name, username } = user

        userId = ObjectId().toString()

        retrieveUser(userId, (error, id) => {
            expect(error).to.exist
            expect(error.message).to.equal('Wrong ID')

            expect(id).to.be.undefined

            done()

        })
    })

    describe('When parameters are not valid', () => {
        describe('When id is not valid', () => {
            it('Should fail when id is not a string', () => {
                expect(() => retrieveUser(true, () => { })).to.throw(TypeError, 'id is not a string')
                
                expect(() => retrieveUser(123, () => { })).to.throw(TypeError, 'id is not a string')
                
                expect(() => retrieveUser([], () => { })).to.throw(TypeError, 'id is not a string')
                
                expect(() => retrieveUser(() => { }, () => { })).to.throw(TypeError, 'id is not a string')
                
                expect(() => retrieveUser({}, () => { })).to.throw(TypeError, 'id is not a string')
            })

            it('Should fail when id is empty', () => {
                expect(() => retrieveUser('', '123123123', () => { })).to.throw(Error, 'id is empty or blank')

                expect(() => retrieveUser('   ', '123123123', () => { })).to.throw(Error, 'id is empty or blank')
            })

            it('Should fail when id has spaces around', () => {
                expect(() => retrieveUser(' 111111111111111111111111 ', () => { })).to.throw(Error, 'blank spaces around id')
            })

            it('Should fail when id length is less than 24 characters', () => {
                expect(() => retrieveUser('1111111111111', () => { })).to.throw(Error, 'id has less than 24 characters')
            })
        })

        describe('When callback is not valid', () => {
            it('Should fail when callback is not a string', () => {
                expect(() => retrieveUser(userId, true)).to.throw(TypeError, 'callback is not a function')

                expect(() => retrieveUser(userId, 123)).to.throw(TypeError, 'callback is not a function')

                expect(() => retrieveUser(userId, {})).to.throw(TypeError, 'callback is not a function')

                expect(() => retrieveUser(userId, '...')).to.throw(TypeError, 'callback is not a function')

                expect(() => retrieveUser(userId, [])).to.throw(TypeError, 'callback is not a function')
            })
        })
    })

    after(done => client.close(done))
})