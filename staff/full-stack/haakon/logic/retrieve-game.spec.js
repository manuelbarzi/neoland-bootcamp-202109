require('dotenv').config()
const { expect } = require('chai')
const { mongoose } = require('data')
const { NotFoundError, FormatError } = require('customs-errors')
const retrieveGame = require('./retrieve-game')

const { env: { MONGO_URL } } = process

describe('retrieveGame', () => {
    before(() => mongoose.connect(MONGO_URL))

    it('should succeed when found correct game', async () => {
        const id = '61d227317753c73a12fa98b4'

        const game = await retrieveGame(id)
        expect(game).to.be.a('object')
        expect(game.id).to.equal(id)
        expect(game.name).to.to.be.a('string')
        expect(game.name).to.equal('Grand Theft Auto V')
        // expect(game.released).to.to.be.instanceOf(Date) // expect to be ? instanceOf Date or Object or i don't know
        // expect(game.released).to.equal('2013-09-17T00:00:00.000Z') // see Date construtor
        expect(game.backgroundImage).to.to.be.a('string')
        expect(game.backgroundImage).to.equal('https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg')
    })

    it(`should fail with doesn't found any game`, async () => {
        const id = '61b8d030168b2213c7cc367e'

        try {
            await retrieveGame(id)
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal(`game with id ${id} not found`)
        }
    })

    describe('should fail when id is not valid', () => {
        it('when query is not a string', () => {
            expect(() => retrieveGame(123)).to.throw(TypeError, 'id is not a string')
            expect(() => retrieveGame(true)).to.throw(TypeError, 'id is not a string')
            expect(() => retrieveGame([])).to.throw(TypeError, 'id is not a string')
            expect(() => retrieveGame({})).to.throw(TypeError, 'id is not a string')
        })

        it('should fail when id is empty or blank', () => {
            expect(() => retrieveGame('')).to.throw(FormatError, 'id is empty or blank')
            expect(() => retrieveGame('   ')).to.throw(FormatError, 'id is empty or blank')
        })

        it('should fail when id has spaces', () => {
            expect(() => retrieveGame(' abcd1234abcd1234abcd1234 ')).to.throw(FormatError, 'id has blank spaces')
            expect(() => retrieveGame('abcd 1234abc d1234abc d1234')).to.throw(FormatError, 'id has blank spaces')
        })

        it('should fail when id is not valid', () => {
            const wrongMongoId = '61b8d031158b2213c7cc37b'
            expect(() => retrieveGame(wrongMongoId)).to.throw(FormatError, 'id is not valid')
        })
    })

    after(() =>
        mongoose.disconnect()
    )
})