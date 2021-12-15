require('dotenv').config()

const { expect } = require('chai')
const retrieveItemsByStore = require('./retrieve-items-by-store')
const { mongoose, models: { Item } } = require('logical-echo-data') 
const { NotFoundError, FormatError } = require('logical-echo-errors')

const { env: { MONGO_URL } } = process

describe('retrieveItemsByStore', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => Item.deleteMany())

    let item

    it('should suceed with correct store for existing items', async () => { 
        const id = 'zarap05644828'
        const store = 'Zara'
        const name = 'CAMISETA CUT OUT LIFE'
        const images = ['https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_1_1_1.jpg?ts=1629456820622', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_2_1_1.jpg?ts=1629455569144']
        const price = '15,95 EUR'
        const url = 'https://www.zara.com/es/es/camiseta-cut-out-life-p05644828.html'
        const description = 'Camiseta de cuello redondo y manga sisa. Detalle de aberturas laterales. Detalle de parche Life combinado a contraste.'
        const colors = ['Blanco']

        item = { id, store, name, images, price, url, description, colors }

        await Item.create(item)

        const res = await retrieveItemsByStore('Zara')

        expect(res[0]).to.exist
        expect(res[0].store).to.equal(store)
        expect(res[0].name).to.equal(name)
        expect(res[0].images[0]).to.equal(images[0])
        expect(res[0].images[1]).to.equal(images[1])
        expect(res[0].price).to.equal(price)
        expect(res[0].url).to.equal(url)
        expect(res[0].description).to.equal(description)
        expect(res[0].colors[0]).to.equal(colors[0])
    })

    it('should fail with incorrect store', async () => {
        const wrongStore = 'Primark'

        try {
            await retrieveItemsByStore(wrongStore)
            
            throw new Error('should not reach this point')

        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal(`items with store ${wrongStore} not found`)
        }
    })

    describe('when parameters are not valid', () => {
        describe('when store is not valid', () => {
            it('should fail when store is not a string', () => {
                expect(() => retrieveItemsByStore(true)).to.throw(TypeError, 'store is not a string')

                expect(() => retrieveItemsByStore(123)).to.throw(TypeError, 'store is not a string')

                expect(() => retrieveItemsByStore({})).to.throw(TypeError, 'store is not a string')

                expect(() => retrieveItemsByStore(() => {})).to.throw(TypeError, 'store is not a string')

                expect(() => retrieveItemsByStore([])).to.throw(TypeError, 'store is not a string')
            })

            it('should fail when store is empty or blank', () => {
                expect(() => retrieveItemsByStore('')).to.throw(FormatError, 'store is empty or blank')

                expect(() => retrieveItemsByStore('   ')).to.throw(FormatError, 'store is empty or blank')
            })

            it('should fail when store has blank spaces around', () => {
                expect(() => retrieveItemsByStore(' Zara ')).to.throw(FormatError, 'blank spaces around store')
            })
        })
    })

    after(async () => {
        await Item.deleteMany()
        
        await mongoose.disconnect()
    })
})