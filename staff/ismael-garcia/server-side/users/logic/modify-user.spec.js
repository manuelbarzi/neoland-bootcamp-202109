const { expect } = require('chai')
const modifyUser = require('./modify-user')
const { MongoClient, ObjectId } = require('mongodb')
const context = require('./context')

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

    beforeEach(done => {
        users.deleteMany({}, done)

    })

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

    it('should suceed with correct id and correct old password for an already existing user', done => {
        const data = {
            username: 'wendyhogazadepan',
            password: '234234234',
            oldPassword: '123123123'
        } 

        modifyUser(userId, data, (error) => {
            if (error) return done(error)

            expect(error).to.be.null

            users.findOne({ _id: ObjectId(userId) }, (error, result) => {
                if (error) return done(error)
                
                user = result 

                expect(user.username).to.equal(data.username)
                expect(user.password).to.equal(data.password)

                done()
            })
        })
    })

    it('should fail with incorrect id', done => {
        const data = {
            username: 'wendyhogazadepan',
            password: '234234234',
            oldPassword: '123123123'
        } 

        userId = ObjectId().toString()

        modifyUser(userId, data, (error) => {
            expect(error).to.exist
            expect(error.message).to.equal(`user with id ${userId} not found`)

            done()
        })
    })

    it('should fail with incorrect old password', done => {
        const data = {
            username: 'wendyhogazadepan',
            password: '234234234',
            oldPassword: '_123123123'
        }

        modifyUser(userId, data, (error) => {
            expect(error).to.exist
            expect(error.message).to.equal('wrong password')

            done()
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
                expect(() => modifyUser('abcd1234abcd1234abcd1234', { }, true)).to.throw(TypeError, 'callback is not a function')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', { }, 123)).to.throw(TypeError, 'callback is not a function')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', { }, {})).to.throw(TypeError, 'callback is not a function')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', { }, '...')).to.throw(TypeError, 'callback is not a function')

                expect(() => modifyUser('abcd1234abcd1234abcd1234', { }, [])).to.throw(TypeError, 'callback is not a function')
            })
        })
    })

    after(done => client.close(done))
})