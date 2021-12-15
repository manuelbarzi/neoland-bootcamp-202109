require('dotenv').config()

const {expect} = require ('chai')
const sendMessage = require('./send-message')
const registerUser = require('./register-user')
const { ConflictError, FormatError } = require('mynutrition-errors')
const {mongoose, mongoose: { Types: { ObjectId } },
    models: { Message, User }} = require('mynutrition-data')
const bcrypt = require('bcryptjs')


const { env: { MONGO_URL } } = process

describe.only('sendMessage', ()=>{

    let user1;
    let user2

    before(async () => {

        mongoose.connect(MONGO_URL)

        const role1 = "admin"
        const name1 = 'Wendy Pan'
        const username1 = 'wendypan'
        const password1 = '123123123'

        await registerUser(role1, name1, username1, password1)

        user1 = await User.findOne({username: username1})
        
        const role2 = "client"
        const name2 = 'Peter Pan'
        const username2 = 'peterpan'
        const password2 = '123123123'

        await registerUser(role2, name2, username2, password2)
        
        user2 = await User.findOne({username: username2})

    })

    beforeEach(() => Message.deleteMany())

    it('should succeed with new message', async () =>{
       
        const parentId = new ObjectId
        const from = user1._id
        const to = user2._id
        const subject = 'Nueva dieta'
        const body = 'Esta es tu nueva dieta'
        const date = new Date('Fri, 10 Dec 2021 00:00:00 GMT')

        const res = await sendMessage(parentId, from, to, subject, body, date)
        expect(res).to.be.undefined

        const find = bcrypt.hashSync(subject)
        
        const message = await Message.findOne({find})
        debugger
        expect(message).to.exist
        expect(message.from.toString()).to.equal(from.toString())
        expect(message.to.toString()).to.equal(to.toString())
        expect(bcrypt.compareSync(subject, message.subject)).to.be.true
        expect(bcrypt.compareSync(body, message.body)).to.be.true
        expect(message.date.toString()).to.equal(date.toString())

        
    })

    it('should succeed when responding a message', async () =>{

        const parentId = new ObjectId
        const from = user1._id.toString()
        const to = user2._id.toString()
        const subject = 'Nueva dieta'
        const body = 'Esta es tu nueva dieta'
        const date = new Date('Fri, 10 Dec 2021 00:00:00 GMT')
        const res = await Message.create({parentId, from, to, subject, body, date})

        const re_parentId = res._id
        const re_from = user2._id.toString()
        const re_to = user1._id.toString()
        const re_subject = 'Re Nueva dieta'
        const re_body = 'Gracias'
        const re_date = new Date('Fri, 10 Dec 2021 00:00:00 GMT')

        const res2 = await sendMessage(re_parentId, re_from, re_to, re_subject, re_body, re_date)
        expect(res2).to.be.undefined   
        debugger
        const message = await Message.findOne({parent: re_parentId})
        expect(message.from.toString()).to.equal(re_from.toString())
        expect(message.to.toString()).to.equal(re_to.toString())
        expect(bcrypt.compareSync(re_subject, message.subject)).to.be.true
        expect(bcrypt.compareSync(re_body, message.body)).to.be.true
        expect(message.date.toString()).to.equal(re_date.toString())     
    })

    describe('when parameters are not valid', () => {
        let user

        it('should fail when subject is empty', async () => {
            expect(() => sendMessage({}, {}, {}, '','Nueva receta',Date.now)).to.throw(FormatError, 'subject is empty or blank')

            expect(() => sendMessage({}, {}, {}, '    ','Nueva Receta',Date.now)).to.throw(FormatError, 'subject is empty or blank')
        })
        it('should fail when body is empty', async () => {
            expect(() => sendMessage({}, {}, {}, 'Nueva receta','',Date.now)).to.throw(FormatError, 'body is empty or blank')

            expect(() => sendMessage({}, {}, {}, 'Nueva receta','    ',Date.now)).to.throw(FormatError, 'body is empty or blank')
        })
    })

    after(async () => {
        await User.deleteMany()
        await Message.deleteMany()
        await mongoose.disconnect()
    })
   
})