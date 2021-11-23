const { expect } = require('chai')
const retrieveUser = require('./retrieve-user')
const { MongoClient } = require('mongodb')
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

            users.createIndex({ username: 1 }, { unique: true })

            done()
        })
    })

    beforeEach(done => users.deleteMany({}, done))

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

    it('should suceed with correct id for an already existing user', done => { 
        retrieveUser(userId, (error, user) => {
            if (error) return done(error)

            expect(user).to.exist
            expect(user.name).to.equal('Wendy Pan')
            expect(user.username).to.equal('wendypan')
            expect(user.password).to.equal('123123123')

            done()
        })
    })

    it('should fail with incorrect id', done => {
        retrieveUser(userId + '-wrong', (error, user) => {
            expect(error).to.exist
            expect(error.message).to.equal(`user with id ${userId + '-wrong'} not found`)

            expect(user).to.be.undefined

            done()
        })
    })

    describe('when parameters are not valid', () => {
        describe('when id is not valid', () => {
            it('should fail when id is not a string', () => {
                expect(() => retrieveUser(true, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveUser(123, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveUser({}, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveUser(() => { }, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveUser([], () => { })).to.throw(TypeError, 'id is not a string')
            })

            it('should fail when id is empty', () => {
                expect(() => retrieveUser('', () => { })).to.throw(Error, 'id is empty or blank')

                expect(() => retrieveUser('   ', () => { })).to.throw(Error, 'id is empty or blank')
            })
        })

        describe('when callback is not valid', () => {
            it('should fail when callback is not a function', () => {
                expect(() => retrieveUser('wendypan', '123123123', true)).to.throw(TypeError, 'callback is not a function')

                expect(() => retrieveUser('wendypan', '123123123', 123)).to.throw(TypeError, 'callback is not a function')

                expect(() => retrieveUser('wendypan', '123123123', {})).to.throw(TypeError, 'callback is not a function')

                expect(() => retrieveUser('wendypan', '123123123', '...')).to.throw(TypeError, 'callback is not a function')

                expect(() => retrieveUser('wendypan', '123123123', [])).to.throw(TypeError, 'callback is not a function')
            })
        })
    })

    after(done => client.close(done))
})