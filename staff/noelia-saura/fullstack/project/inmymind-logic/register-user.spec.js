require('dotenv').config()

const { expect } = require('chai')
const registerUser = require('./register-user')
const { mongoose, models: { User } } = require('inmymind-data')
const { ConflictError, FormatError } = require('inmymind-errors')
const bcrypt = require('bcryptjs')

const { env: { MONGO_URL } } = process

describe('registerUser', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => User.deleteMany())

    it('should succeed with new user', () => {
        const name = 'Wendy Pan'
        const username = 'wendypan'
        const password = '123123123'
        const gender = 'female'
        const age = 26
        const email = 'wendypan@gmail.com'

        return registerUser(name, username, password, gender, age, email)
            .then(res => {
                expect(res).to.be.undefined

                return User.findOne({ username })
            })
            .then(user => {
                expect(user).to.exist
                expect(user.name).to.equal(name)
                expect(user.username).to.equal(username)

                expect(bcrypt.compareSync(password, user.password)).to.be.true
                expect(user.gender).to.equal(gender)
                expect(user.age).to.equal(age)
                expect(user.email).to.equal(email)
            })
    })

    describe('when user already exists', () => {
        let user

        beforeEach(() => {
            user = {
                name: 'Wendy Pan',
                username: 'wendypan',
                password: '123123123',
                gender: 'female',
                age: 26,
                email: 'wendypan@gmail.com',
            }

            return User.create(user)
        })

        it('should fail when user already exists', () => {
            const { name, username, password, gender, age, email} = user

            return registerUser(name, username, password, gender, age, email)
                .then(() => { throw new Error('should not reach this point') })
                .catch(error => {
                    expect(error).to.exist
                    expect(error).to.be.instanceOf(ConflictError)
                    expect(error.message).to.equal(`user with username ${username} already exists`)
                })
        })
    })

    describe('when parameters are not valid', () => {
        describe('when name is not valid', () => {
            it('should fail when name is not a string', () => {
                expect(() => registerUser(true, 'wendypan', '123123123','female',26,'wendypan@gmail.com')).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser(123, 'wendypan', '123123123','female',26,'wendypan@gmail.com')).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser({}, 'wendypan', '123123123','female',26,'wendypan@gmail.com')).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser(() => { }, 'wendypan', '123123123','female',26,'wendypan@gmail.com')).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser([], 'wendypan', '123123123','female',26,'wendypan@gmail.com')).to.throw(TypeError, 'name is not a string')
            })

            it('should fail when name is empty', () => {
                expect(() => registerUser('', 'wendypan', '123123123','female',26,'wendypan@gmail.com')).to.throw(FormatError, 'name is empty or blank')

                expect(() => registerUser('   ', 'wendypan', '123123123','female',26,'wendypan@gmail.com')).to.throw(FormatError, 'name is empty or blank')
            })

            it('should fail when name has spaces around', () => {
                expect(() => registerUser(' Wendy Pan ', 'wendypan', '123123123','female',26,'wendypan@gmail.com')).to.throw(FormatError, 'blank spaces around name')
            })
        })

        describe('when username is not valid', () => {
            it('should fail when username is not a string', () => {
                expect(() => registerUser('Wendy Pan', true, '123123123','female',26,'wendypan@gmail.com')).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', 123, '123123123','female',26,'wendypan@gmail.com')).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', {}, '123123123','female',26,'wendypan@gmail.com')).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', () => { }, '123123123','female',26,'wendypan@gmail.com')).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', [], '123123123','female',26,'wendypan@gmail.com')).to.throw(TypeError, 'username is not a string')
            })

            it('should fail when username is empty', () => {
                expect(() => registerUser('Wendy Pan', '', '123123123','female',26,'wendypan@gmail.com')).to.throw(FormatError, 'username is empty or blank')

                expect(() => registerUser('Wendy Pan', '   ', '123123123','female',26,'wendypan@gmail.com')).to.throw(FormatError, 'username is empty or blank')
            })

            it('should fail when username has spaces', () => {
                expect(() => registerUser('Wendy Pan', ' wendypan ', '123123123','female',26,'wendypan@gmail.com')).to.throw(FormatError, 'username has blank spaces')

                expect(() => registerUser('Wendy Pan', 'wendy pan', '123123123','female',26,'wendypan@gmail.com')).to.throw(FormatError, 'username has blank spaces')
            })

            it('should fail when username length is less that 4 characters', () => {
                expect(() => registerUser('Wendy Pan', 'wp', '123123123','female',26,'wendypan@gmail.com')).to.throw(FormatError, 'username has less than 4 characters')
            })
        })

        describe('when password is not valid', () => {
            it('should fail when password is not a string', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', true,'female',26,'wendypan@gmail.com')).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', 123,'female',26,'wendypan@gmail.com')).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', {},'female',26,'wendypan@gmail.com')).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', () => { },'female',26,'wendypan@gmail.com')).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', [],'female',26,'wendypan@gmail.com')).to.throw(TypeError, 'password is not a string')
            })

            it('should fail when password is empty', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', '','female',26,'wendypan@gmail.com')).to.throw(FormatError, 'password is empty or blank')

                expect(() => registerUser('Wendy Pan', 'wendypan', '   ','female',26,'wendypan@gmail.com')).to.throw(FormatError, 'password is empty or blank')
            })

            it('should fail when password has spaces', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', ' 123123123 ','female',26,'wendypan@gmail.com')).to.throw(FormatError, 'password has blank spaces')

                expect(() => registerUser('Wendy Pan', 'wendypan', '123 123 123','female',26,'wendypan@gmail.com')).to.throw(FormatError, 'password has blank spaces')
            })

            it('should fail when password length is less that 8 characters', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123','female',26,'wendypan@gmail.com')).to.throw(FormatError, 'password has less than 8 characters')
            })
        })

        describe('when gender is not valid',() =>{
            it('should fail when gender is not a string',()=>{
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123',true,26,'wendypan@gmail.com')).to.throw(TypeError, 'gender is not a string')
                
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123',123,26,'wendypan@gmail.com')).to.throw(TypeError, 'gender is not a string')
                
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123',{},26,'wendypan@gmail.com')).to.throw(TypeError, 'gender is not a string')
               
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123',()=>{},26,'wendypan@gmail.com')).to.throw(TypeError, 'gender is not a string')
                
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123',[],26,'wendypan@gmail.com')).to.throw(TypeError, 'gender is not a string')
            })
            it('should fail when gender is empty',()=>{
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','',26,'wendypan@gmail.com')).to.throw(FormatError, 'gender is empty or blank')

                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','   ',26,'wendypan@gmail.com')).to.throw(FormatError, 'gender is empty or blank')
            
            })
            it('should fail when gender has spaces',()=>{
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123',' female ',26,'wendypan@gmail.com')).to.throw(FormatError, 'gender has blank spaces')

                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','fe ma le',26,'wendypan@gmail.com')).to.throw(FormatError, 'gender has blank spaces')
            
            })        
        })

        describe('when age is not valid',() =>{
            it('should fail when age is not a number',()=>{
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female',true,'wendypan@gmail.com')).to.throw(TypeError, 'age is not a number')
                
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female','','wendypan@gmail.com')).to.throw(TypeError, 'age is not a number')
                
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female',{},'wendypan@gmail.com')).to.throw(TypeError, 'age is not a number')
               
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female',()=>{},'wendypan@gmail.com')).to.throw(TypeError, 'age is not a number')
                
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female',[],'wendypan@gmail.com')).to.throw(TypeError, 'age is not a number')
            })
                   
        })
        
        // describe('when email is not valid',()=>{
        //     it('should fail when email is not a string',()=>{
        //         expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female', 26 , true)).to.throw(TypeError, 'email is not a string')
                
        //         expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female',26,123)).to.throw(TypeError, 'email is not a string')
                
        //         expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female',26,{})).to.throw(TypeError, 'email is not a string')
               
        //         expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female',26,()=>{})).to.throw(TypeError, 'email is not a string')
                
        //         expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female',26,[])).to.throw(TypeError, 'email is not a string')
            
        //     })
        //     it('should fail when email is empty',()=>{
        //         expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female',26,'')).to.throw(FormatError, 'email is empty or blank')

        //         expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female',26,'   ')).to.throw(FormatError, 'email is empty or blank')
            
        //     })
        //     it('should fail when email has spaces',()=>{
        //         expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female',26,' wendypan@gmail.com ')).to.throw(FormatError, 'email has blank spaces')

        //         expect(() => registerUser('Wendy Pan', 'wendypan', '123123123','female',26,'wendy pan @ gmail. com')).to.throw(FormatError, 'email has blank spaces')
            
        //     })
        //     it('should fail when email not have @',()=>{
        //         expect(()=> registerUser('Wendy Pan', 'wendypan', '123123123','female',26,'wendypangmail.com')).to.throw(FormatError, 'email not have @')
        //     })
        // })

    })

    after(() =>
        User.deleteMany()
            .then(() => mongoose.disconnect())
    )
})