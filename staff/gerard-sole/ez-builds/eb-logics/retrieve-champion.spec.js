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
        let query = name

        const champions = await retrieveChampion(query)
        champions.forEach(champion2 => {
            expect(champion2).to.exist
            expect(champion2.name).to.equal(name)
            expect(champion2.title).to.equal(title)
            expect(champion2.key).to.equal(key)
        })
            
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
            it('should fail when query is not a string', () => {
                expect(() => retrieveChampion(true, () => { })).to.throw(TypeError, 'query is not a string')

                expect(() => retrieveChampion(123, () => { })).to.throw(TypeError, 'query is not a string')

                expect(() => retrieveChampion({}, () => { })).to.throw(TypeError, 'query is not a string')

                expect(() => retrieveChampion(() => { }, () => { })).to.throw(TypeError, 'query is not a string')

                expect(() => retrieveChampion([], () => { })).to.throw(TypeError, 'query is not a string')
            })

            it('should fail when query is empty or blank', () => {
                expect(() => retrieveChampion('', () => { })).to.throw(FormatError, 'query is empty or blank')

                expect(() => retrieveChampion('   ', () => { })).to.throw(FormatError, 'query is empty or blank')
            })
         })
    })
    after(async () => {
        await Champion.deleteMany()

        await mongoose.disconnect()
    })
})