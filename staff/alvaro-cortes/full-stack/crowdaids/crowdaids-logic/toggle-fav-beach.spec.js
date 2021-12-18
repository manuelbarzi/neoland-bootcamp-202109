require('dotenv').config()

const { expect } = require('chai')
const toggleFavBeach = require('./toggle-fav-beach')
const { mongoose, models: { User } } = require('crowdaids-data')
const { NotFoundError, FormatError } = require('crowdaids-errors')
const { Types: { ObjectId } } = mongoose

const { env: { MONGO_URL } } = process

describe('toggleFavBeach', () => {

    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => User.deleteMany())

    let user, userId

    beforeEach(async () => {
        user = {
            name: 'Wendy Pan',
            username: 'wendypan',
            email: 'wendy@pan.com',
            password: '123123123'
        }

        const user2 = await User.create(user)

        userId = user2.id
    })

    it('Should succeed when beach is added on favorites', async () => {
        const newFav = '590927576a2e4300134fbed8'

        const res = await toggleFavBeach(userId, newFav)

        expect(res).to.exist
        expect(res.favorites).to.have.deep.members([newFav])
    })

    let user1

    it('Should succed when beach is remove from favorites', async () => {
        user1 = {
            name: 'Peter Pan',
            username: 'peterpan',
            email: 'peter@pan.com',
            password: '123123123',
            favorites: '590927576a2e4300134fbed8'
        }

        const user3 = await User.create(user1)

        userId = user3.id

        const { favorites } = user1
        
        const res = await toggleFavBeach(userId, favorites)

        expect(res).to.exist
        expect(res.favorites).to.have.deep.members([])
    })

    it('Should fail when user id does not correspond to any user', async () => {
        const userId = ObjectId().toString()
        const newFav = '590927576a2e4300134fbed8'

        try {
            await toggleFavBeach(userId, newFav)

            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal(`user with id ${userId} not found`)
        }
    })

    describe('When parameters are not valid', () => {
        describe('When user id is not valid', () => {
            it('Should fail when id is not a string', () => {
                expect(() => toggleFavBeach(true, '590927576a2e4300134fbed8')).to.throw(TypeError, 'id is not a string')

                expect(() => toggleFavBeach(123, '590927576a2e4300134fbed8')).to.throw(TypeError, 'id is not a string')

                expect(() => toggleFavBeach([], '590927576a2e4300134fbed8')).to.throw(TypeError, 'id is not a string')

                expect(() => toggleFavBeach(() => { }, '590927576a2e4300134fbed8')).to.throw(TypeError, 'id is not a string')

                expect(() => toggleFavBeach({}, '590927576a2e4300134fbed8')).to.throw(TypeError, 'id is not a string')
            })

            it('Should fail when id is empty', () => {
                expect(() => toggleFavBeach('', '590927576a2e4300134fbed8')).to.throw(FormatError, 'id is empty or blank')

                expect(() => toggleFavBeach('   ', '590927576a2e4300134fbed8')).to.throw(FormatError, 'id is empty or blank')
            })

            it('Should fail when id has spaces around', () => {
                expect(() => toggleFavBeach(' 111111111111111111111111 ', '590927576a2e4300134fbed8')).to.throw(FormatError, 'blank spaces around id')
            })

            it('Should fail when id length is less than 24 characters', () => {
                expect(() => toggleFavBeach('1111111111111', '590927576a2e4300134fbed8')).to.throw(FormatError, 'id has less than 24 characters')
            })
        })

        describe('When beach id is not valid', () => {
            it('Should fail when id is not a string', () => {
                expect(() => toggleFavBeach('61bcb41451bd1ac2246f74da', true)).to.throw(TypeError, 'id is not a string')

                expect(() => toggleFavBeach('61bcb41451bd1ac2246f74da', 123)).to.throw(TypeError, 'id is not a string')

                expect(() => toggleFavBeach('61bcb41451bd1ac2246f74da', [])).to.throw(TypeError, 'id is not a string')

                expect(() => toggleFavBeach('61bcb41451bd1ac2246f74da', () => { }, )).to.throw(TypeError, 'id is not a string')

                expect(() => toggleFavBeach('61bcb41451bd1ac2246f74da', {})).to.throw(TypeError, 'id is not a string')
            })

            it('Should fail when id is empty', () => {
                expect(() => toggleFavBeach('61bcb41451bd1ac2246f74da', '')).to.throw(FormatError, 'id is empty or blank')

                expect(() => toggleFavBeach('61bcb41451bd1ac2246f74da', '   ')).to.throw(FormatError, 'id is empty or blank')
            })

            it('Should fail when id has spaces around', () => {
                expect(() => toggleFavBeach('61bcb41451bd1ac2246f74da', ' 111111111111111111111111 ')).to.throw(FormatError, 'blank spaces around id')
            })

            it('Should fail when id length is less than 24 characters', () => {
                expect(() => toggleFavBeach('61bcb41451bd1ac2246f74da', '1111111111111')).to.throw(FormatError, 'id has less than 24 characters')
            })
        })
    })

    after(async () => {
        await User.deleteMany()

        await mongoose.disconnect()
    })
})