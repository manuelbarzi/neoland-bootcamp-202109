const {expect} = require('chai')
const modifyUser = require('./register-user')
const {MongoClient} = require('mongodb')
const context = require('./context')

describe('Modify User',()=>{
debugger
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

            userId = result.insertedId.toString()

            done()
        })
    })

    it('should pass when name is changed', (done) => {
        const data = {name: 'Peter Pan'}

        modifyUser(userId,data,(error,user)=>{
            if(error) return done(error)

            expect(user).to.exist
            expect(user.name).to.equal(data.name)
            expect(user.id).to.equal(userId)
            done()
        })
    });
    

    after(done => {
        client.close(done)
    })
})