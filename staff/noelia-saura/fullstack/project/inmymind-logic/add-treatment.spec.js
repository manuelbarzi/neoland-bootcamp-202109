require('dotenv').config()

const { expect } = require('chai')
const addTreatment = require('./add-treatment')
const { mongoose, models: { Treatment } } = require('inmymind-data')
const {FormatError } = require('inmymind-errors')


const { env: { MONGO_URL } } = process

describe('addTreatment', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => Treatment.deleteMany())

    it('should succeed with new treatment', () => {
        const content = "New treatment"
        const date = new Date("Thu, 09 Dec 2021 00:00:00 GMT")
        const user_id = "61ad1ad9799afee83e26c8b4"

        return addTreatment(content, date, user_id)
            .then(res => {
                expect(res).to.be.undefined

                return Treatment.findOne({ date })
            })
            .then(treatment => {
                expect(treatment).to.exist
                expect(treatment.content).to.equal(content)
                expect(treatment.date.toString()).to.equal(date.toString())
            })
    })
    describe('when parameters are not valid', () => {
        describe('when content is not valid', () => {
            it('should fail when content is not a string', () => {
                expect(() => addTreatment(true, new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(TypeError, 'treatment is not a string')

                expect(() => addTreatment(123, new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(TypeError, 'treatment is not a string')

                expect(() => addTreatment({}, new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(TypeError, 'treatment is not a string')

                // expect(() => addTreatment(() => { }, new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(TypeError, 'treatment is not a string')

                expect(() => addTreatment([], new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(TypeError, 'treatment is not a string')
            })

            it('should fail when content is empty', () => {
                expect(() => addTreatment('', new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(FormatError, 'treatment is empty or blank')

                expect(() => addTreatment('   ', new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(FormatError, 'treatment is empty or blank')
            })
        })
    })
    after(() =>
        Treatment.deleteMany()
            .then(() => mongoose.disconnect())
    )
})
