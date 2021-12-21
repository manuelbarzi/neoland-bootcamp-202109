require('dotenv').config()
const { expect } = require('chai')
const { models: { User, Game }, mongoose } = require('data')
const { NotFoundError, FormatError } = require('customs-errors')
const retrieveFavGames = require('./retrieve-fav-games')
const bcrypt = require('bcryptjs')


const { env: { MONGO_URL } } = process

describe('retrieveFavGames', () => {
    before(() => mongoose.connect(MONGO_URL))

    let user, userId

    describe('Happy Path', () => {
        beforeEach(async () => {
            user = {
                name: 'Wendy Pan',
                username: 'wendypan',
                password: '123123123'
            }

            const _user = await User.create({ ...user, password: bcrypt.hashSync(user.password) })
            userId = _user.id
            debugger
            const user2 = await User.findById(userId)

            user2.favGames.push('61b8d030158b2213c7cc36ba', '61b8d02f158b2213c7cc3610', '61b8d02f158b2213c7cc361f')

            await user2.save()
        })

        it('shoul be good when retrieve fav games', async () => {
            debugger
            const favs = await retrieveFavGames(userId)
            expect(favs).to.be.instanceOf(Array)
            expect(favs).to.be.length(3)
            // Ver cada elemento de favs si son iguales a los id pusheados arriba
        })
    })

    after(async () => {
        await User.deleteMany()
        await mongoose.disconnect()
    })
})