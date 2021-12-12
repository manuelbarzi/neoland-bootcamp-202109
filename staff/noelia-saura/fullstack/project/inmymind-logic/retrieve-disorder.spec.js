require('dotenv').config()

const { expect } = require('chai')
const retrieveDisorder = require('./retrieve-disorder')
const { mongoose, models: { Disorder } } = require('inmymind-data')
const { Types: { ObjectId } } = mongoose
const { NotFoundError, FormatError } = require('inmymind-errors')

const { env: { MONGO_URL } } = process

describe('retrieveDisorder', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => Disorder.deleteMany())

    let disorder, disorderId

    beforeEach(() => {
        disorder = {
            date: new Date("Thu, 09 Dec 2021 00:00:00 GMT"),
            user_id: "61ad1ad9799afee83e26c8b4",
            symptom: "Estres",
            relax: 3,
            negativestate: true,
            breathe: 2,
            initiatives: 3,
            whichinitiatives: "hablar",
            overreaction: 2,
            tremblehands: 4,
            paralyzed: 4,
            nerves: 3,
            worried: 2,
            whichworried: "trabajo",
            live: 4,
            sad: 4,
            verysleep: 2,
            panic: 4,
            enthuse: 3,
            value: 3,
            irritable: 3,
            afraid: 2,
            overthinking: 1,
            causedstate: "trabajo",
        }

        return Disorder.create(disorder)
            .then(disorder => disorderId = disorder.id)
    })

    it('should succeed with correct id for an already existing disorder', () => {
        const date = new Date("Thu, 09 Dec 2021 00:00:00 GMT")
        const user_id = "61ad1ad9799afee83e26c8b4"
        const symptom = "Estres"
        const relax = 3
        const negativestate = true
        const breathe = 2
        const initiatives = 3
        const whichinitiatives = "hablar"
        const overreaction = 2
        const tremblehands = 4
        const paralyzed = 4
        const nerves = 3
        const worried = 2
        const whichworried = "trabajo"
        const live = 4
        const sad = 4
        const verysleep = 2
        const panic = 4
        const enthuse = 3
        const value = 3
        const irritable = 3
        const afraid = 2
        const overthinking = 1
        const causedstate = "trabajo"

        return retrieveDisorder(user_id, date)
            .then(disorders => {
                const disorder = disorders[0]

                expect(disorder).to.exist
                expect(disorder.date.toString()).to.equal(date.toString())
                expect(disorder.symptom).to.equal(symptom)
                expect(disorder.relax).to.equal(relax)
                expect(disorder.negativestate).to.equal(negativestate)
                expect(disorder.breathe).to.equal(breathe)
                expect(disorder.initiatives).to.equal(initiatives)
                expect(disorder.whichinitiatives).to.equal(whichinitiatives)
                expect(disorder.overreaction).to.equal(overreaction)
                expect(disorder.tremblehands).to.equal(tremblehands)
                expect(disorder.paralyzed).to.equal(paralyzed)
                expect(disorder.nerves).to.equal(nerves)
                expect(disorder.worried).to.equal(worried)
                expect(disorder.whichworried).to.equal(whichworried)
                expect(disorder.live).to.equal(live)
                expect(disorder.sad).to.equal(sad)
                expect(disorder.verysleep).to.equal(verysleep)
                expect(disorder.panic).to.equal(panic)
                expect(disorder.enthuse).to.equal(enthuse)
                expect(disorder.value).to.equal(value)
                expect(disorder.irritable).to.equal(irritable)
                expect(disorder.afraid).to.equal(afraid)
                expect(disorder.overthinking).to.equal(overthinking)
                expect(disorder.causedstate).to.equal(causedstate)
            })
    })

    // it('should fail with incorrect id', () => {
    //     const userId = new ObjectId().toString()
    //     const date = new Date("Thu, 09 Dec 2021 00:00:00 GMT")

    //     return retrieveDisorder(userId, date)
    //         .then(() => { throw new Error('should not reach this point') })
    //         .catch(error => {
    //             expect(error).to.exist
    //             expect(error).to.be.instanceOf(NotFoundError)
    //             expect(error.message).to.equal(`disorder with id ${userId} not found`)
    //         })
    // })

    describe('when parameters are not valid', () => {
        describe('when id is not valid', () => {
            it('should fail when id is not a string', () => {
                expect(() => retrieveDisorder
            (true, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveDisorder
            (123, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveDisorder
            ({}, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveDisorder
            (() => { }, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveDisorder
            ([], () => { })).to.throw(TypeError, 'id is not a string')
            })

            it('should fail when id is empty or blank', () => {
                expect(() => retrieveDisorder
            ('', () => { })).to.throw(FormatError, 'id is empty or blank')

                expect(() => retrieveDisorder
            ('   ', () => { })).to.throw(FormatError, 'id is empty or blank')
            })

            it('should fail when id has spaces', () => {
                expect(() => retrieveDisorder
            (' abcd1234abcd1234abcd1234 ', () => { })).to.throw(FormatError, 'id has blank spaces')

                expect(() => retrieveDisorder
            ('abcd 1234abc d1234abc d1234', () => { })).to.throw(FormatError, 'id has blank spaces')
            })

            it('should fail when id length is different from 24 characters', () => {
                expect(() => retrieveDisorder
            ('abc', () => { })).to.throw(FormatError, 'id doesn\'t have 24 characters')
            })
        })
    })

    after(() =>
        Disorder.deleteMany()
            .then(() => mongoose.disconnect())
    )
})