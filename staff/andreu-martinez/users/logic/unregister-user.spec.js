const { expect } = require('chai')
const unregisterUser = require('./unregister-user')
const { MongoClient, ObjectId } = require('mongodb')
const context = require('./context')

describe('Unregister User', () => {
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

    describe('when user already exists', () => {
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

        describe('when user id given exists', () => {
            it('it should succeed when password is correct', (done) => {
                let {password} = user

                unregisterUser(userId, password, (error)=>{
                    if(error) return done(error)
                    expect(error).to.be.null

                    users.findOne({_id: ObjectId(userId)}, (error, user)=>{
                        if(error) return done(error)
                        expect(user).to.be.null

                        done()
                    })
                    
                })
                
            });

            it('it should fail when password is not correct', (done) => {
                let { password} = user

                password += '-modified'

                unregisterUser(userId, password, error=>{
                    expect(error).to.exist
                    expect(error.message).to.equal('Invalid password')
                    done()
                })
                
            });
        });
        
        
        
        
    })

    after(done => users.deleteMany({}, error => {
        if (error) return done(error)

        client.close(done)
    }))

})
