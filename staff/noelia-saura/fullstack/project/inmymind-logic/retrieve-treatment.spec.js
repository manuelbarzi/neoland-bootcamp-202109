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

    beforeEach(() => {
        treatment = {
            content: "New treatment",
            date: new Date("Thu, 09 Dec 2021 00:00:00 GMT"),
            user_id: "61ad1ad9799afee83e26c8b4"
        }

        return Treatment.create(treatment)
            .then(treatment => treatmentId = treatment.id)
    })

    // it('should succeed with correct id for an already existing treatment', () => {
    //     const content = "New treatment"
    //     const date = new Date("Thu, 09 Dec 2021 00:00:00 GMT")
    //     const user_id = "61ad1ad9799afee83e26c8b4"

    //     return retrieveTreatment(content,date,user_id)
    //     .then(res => {
    //         expect(res).to.be.undefined

    //         return Treatment.findOne({ date })
    //     })
    //         .then(treatment => {
    //             expect(treatment).to.exist
    //             expect(treatment.content).to.equal(content)
    //             expect(treatment.date.toString()).to.equal(date.toString())
    //         })
    // })

    // it('should fail with incorrect id', () => {
    //     noteId = new ObjectId().toString()

    //     return retrieveTreatment(noteId)
    //         .then(() => { throw new Error('should not reach this point') })
    //         .catch(error => {
    //             expect(error).to.exist
    //             expect(error).to.be.instanceOf(NotFoundError)
    //             expect(error.message).to.equal(`treatment with id ${noteId} not found`)
    //         })
    // })

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

            it('should fail when id length is different from 24 characters', () => {
                expect(() => retrieveTreatment
            ('abc', () => { })).to.throw(FormatError, 'id doesn\'t have 24 characters')
            })
        })
    })

    after(() =>
        Treatment.deleteMany()
            .then(() => mongoose.disconnect())
    )
})