require('dotenv').config()

const { expect } = require('chai')
const retrieveTreatment = require('./retrieve-treatment')
const { mongoose, models: { Treatment } } = require('inmymind-data')
const { Types: { ObjectId } } = mongoose
const { NotFoundError, FormatError } = require('inmymind-errors')

const { env: { MONGO_URL } } = process

describe('retrieveTreatment', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => Treatment.deleteMany())

    let treatment, treatmentId

    beforeEach(async() => {
        treatment = {
            content: "New treatment",
            date: new Date("Thu, 09 Dec 2021 00:00:00 GMT"),
            user_id: "61ad1ad9799afee83e26c8b4"
        }
        const _treatment=Treatment.create(treatment)
        
        treatmentId= _treatment.id
        
    })

    describe('when parameters are not valid', () => {
        describe('when id is not valid', () => {
            it('should fail when id is not a string', () => {
                expect(() => retrieveTreatment
            (true, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveTreatment
            (123, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveTreatment
            ({}, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveTreatment
            (() => { }, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveTreatment
            ([], () => { })).to.throw(TypeError, 'id is not a string')
            })

            it('should fail when id is empty or blank', () => {
                expect(() => retrieveTreatment
            ('', () => { })).to.throw(FormatError, 'id is empty or blank')

                expect(() => retrieveTreatment
            ('   ', () => { })).to.throw(FormatError, 'id is empty or blank')
            })

            it('should fail when id has spaces', () => {
                expect(() => retrieveTreatment
            (' abcd1234abcd1234abcd1234 ', () => { })).to.throw(FormatError, 'id has blank spaces')

                expect(() => retrieveTreatment
            ('abcd 1234abc d1234abc d1234', () => { })).to.throw(FormatError, 'id has blank spaces')
            })

           
        })
    })

    after(async() =>{
        await Treatment.deleteMany()
        await mongoose.disconnect()
    })
    // after(() =>
    //     Treatment.deleteMany()
    //         .then(() => mongoose.disconnect())
    // )
})