const { expect } = require('chai')
const registerUser = require('./register-user')
const { MongoClient } = require('mongodb')
const context = require('./context')

describe('Register User', () => {
    let users, db, client

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
    
    
    describe('When user doesnt exists', () => {

        it('should succeed with new user', (done) => {
            const name = 'Juana la Loca'
            const username = 'crazyJ'
            const password = '123123123'

            registerUser(name, username, password, (error) => {
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

        });
    });

    describe('When username already exists', () => {
        let user
        beforeEach(done => {
            user = {
                name: 'Pepito palotes',
                username: 'pepito84',
                password: '123123123'
            }
            users.insertOne(user, done)
        })

        it('should fail when username already exists', (done) => {
            const {name, username, password} = user

            registerUser(name, username, password, error => {
                expect(error).to.exist
                expect(error.message).to.equal(`User with username ${username} already exists`)
                done()
            })

        });
   
    });

    describe('validation parameters with invalid data', () => {
        describe('When name is not valid', () => {
            it('should fail when name is not a string', () =>{
                expect(() => registerUser(true, 'wendypan','123123123', () =>{})).to.throw(TypeError, 'name is not a string')
                expect(() => registerUser(123, 'wendypan','123123123', () =>{})).to.throw(TypeError, 'name is not a string')
                expect(() => registerUser({}, 'wendypan','123123123', () =>{})).to.throw(TypeError, 'name is not a string')
                expect(() => registerUser(()=>{}, 'wendypan','123123123', () =>{})).to.throw(TypeError, 'name is not a string')
                expect(() => registerUser([], 'wendypan','123123123', () =>{})).to.throw(TypeError, 'name is not a string')
            })

            it('should fail when name is empty', ()=>{
                expect(()=> registerUser('','wendypan','123123123', ()=>{})).to.throw(Error, 'name is empty or blank')
                expect(()=> registerUser('    ','wendypan','123123123',()=>{})).to.throw(Error,'name is empty or blank')
            })

            it('should fail when name has spaces around', ()=>{
                expect(() => registerUser('  Wendy Pan  ','wendypan', '123123123', ()=>{})).to.throw(Error,'blank spaces around name')
            })
        })

        describe('when username is not valid', () =>{
            it('should fail when callback is not a string', ()=>{
                expect(()=>registerUser('Wendy Pan', true, '123123123', ()=>{})).to.throw(TypeError,'username is not a string')
                expect(()=>registerUser('Wendy Pan', 123, '123123123', ()=>{})).to.throw(TypeError,'username is not a string')
                expect(()=>registerUser('Wendy Pan', {}, '123123123', ()=>{})).to.throw(TypeError,'username is not a string')
                expect(()=>registerUser('Wendy Pan', ()=>{}, '123123123', ()=>{})).to.throw(TypeError,'username is not a string')
                expect(()=>registerUser('Wendy Pan', [], '123123123', ()=>{})).to.throw(TypeError,'username is not a string')
            })

            it('should fail when username is empty', ()=>{
                expect(()=> registerUser('Wendy Pan', '', '123123123',()=>{})).to.throw(Error,'username is empty or blank')
                expect(()=> registerUser('Wendy Pan', '   ', '123123123',()=>{})).to.throw(Error,'username is empty or blank')
            })

            it('should fail when username has spaces around', ()=>{
                expect(()=> registerUser('Wendy Pan', '  wendypan  ', '123123123',()=>{})).to.throw(Error,'username has blank spaces')
            })

            it('should fail when username length is less than 4 characters',()=>{
                expect(()=> registerUser('Wendy Pan', 'wp','123123123', ()=>{})).to.throw(Error, 'username has less than 4 characters')
            })
            
        })
        
    })
    


    after(done => {
        client.close(done)
    })

})
