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
    })

    after(done => users.deleteMany({}, error => {
        if (error) return done(error)

        client.close(done)
    }))
})