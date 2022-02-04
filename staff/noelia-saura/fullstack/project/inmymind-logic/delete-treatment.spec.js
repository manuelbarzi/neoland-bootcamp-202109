require('dotenv').config()

const { expect } = require('chai')
const deleteTreatment = require('./delete-treatment')
const { mongoose, models: { Treatment } } = require('inmymind-data')
const { FormatError } = require('inmymind-errors')

const { env: { MONGO_URL } } = process

describe('deleteTreatment', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => Treatment.deleteMany())

    let treatment, treatmentId

    beforeEach(() => {
        treatment = {
            content: "New treatment",
            date: new Date("Thu, 09 Dec 2021 00:00:00 GMT"),
            user_id: "61ad1ad9799afee83e26c8b4",
            treatment_id:"61ad1ad9799afee83e26c8b5"
        }

        return Treatment.create(treatment)
            .then(treatment => treatmentId = treatment.id)
    })

    describe('When parameters are treatment valid', () => {
        describe('When id is not valid', () => {
            it('should fail when id is not a string', () => {
                expect(() => deleteTreatment(true)).to.throw(TypeError, 'id is not a string')

                expect(() => deleteTreatment(123)).to.throw(TypeError, 'id is not a string')

                expect(() => deleteTreatment({})).to.throw(TypeError, 'id is not a string')

                expect(() => deleteTreatment(() => { })).to.throw(TypeError, 'id is not a string')

                expect(() => deleteTreatment([])).to.throw(TypeError, 'id is not a string')
            })

            it('should fail when id is empty or blank', () => {
                expect(() => deleteTreatment('')).to.throw(FormatError, 'id is empty or blank')

                expect(() => deleteTreatment('   ')).to.throw(FormatError, 'id is empty or blank')
            })
        })
    })
    after(() => 
        Treatment.deleteMany()
            .then(() => mongoose.disconnect()))
})