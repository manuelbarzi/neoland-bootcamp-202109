require('dotenv').config()

const { expect } = require('chai')
const retrieveChampion = require('./retrieve-champion')
const { mongoose, models: { Champion } } = require('eb-data')
const { NotFoundError, FormatError } = require('eb-errors')

const { env: { MONGO_URL } } = process

describe('retrieveChampion', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => Champion.deleteMany())

    let champion

    beforeEach(async () => {
        champion = {
            name: 'Aatrox',
            title: 'la Espada de los Oscuros',
            key: 266
        }

        const champion2 = await Champion.create(champion)
    })

    it('should succeed with correct name for an already existing champion', async () => {
        const { name, title, key } = champion

        const champion2 = await retrieveChampion(name)

        expect(champion2).to.exist
        expect(champion2.name).to.equal(name)
        expect(champion2.title).to.equal(title)
        expect(champion2.key).to.equal(key)
        
    })

    it('should fail with incorrect name', async () => {
        const { name } = champion
        try {
            await retrieveChampion(name)
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal(`Wrong Name`)
        }
    })

    describe('when parameters are not valid', () => {
        describe('when name is not valid', () => {
            it('should fail when name is not a string', () => {
                expect(() => retrieveChampion(true, () => { })).to.throw(TypeError, 'name is not a string')

                expect(() => retrieveChampion(123, () => { })).to.throw(TypeError, 'name is not a string')

                expect(() => retrieveChampion({}, () => { })).to.throw(TypeError, 'name is not a string')

                expect(() => retrieveChampion(() => { }, () => { })).to.throw(TypeError, 'name is not a string')

                expect(() => retrieveChampion([], () => { })).to.throw(TypeError, 'name is not a string')
            })

            it('should fail when name is empty or blank', () => {
                expect(() => retrieveChampion('', () => { })).to.throw(FormatError, 'name is empty or blank')

                expect(() => retrieveChampion('   ', () => { })).to.throw(FormatError, 'name is empty or blank')
            })
         })
    })
    after(async () => {
        await Champion.deleteMany()

        await mongoose.disconnect()
    })
})