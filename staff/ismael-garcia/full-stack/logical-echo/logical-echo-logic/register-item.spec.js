require('dotenv').config()

const { expect } = require('chai')
const registerItem = require('./register-item')
const { mongoose, models: { Item } } = require('logical-echo-data')
const { ConflictError, FormatError } = require('logical-echo-errors')

const { env: { MONGO_URL } } = process

describe('registerItem', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => Item.deleteMany())

    it('should suceed with new item', async () => {
        const id = 'zarap05644828'
        const store = 'Zara'
        const pattern = 'Woman'
        const name = 'CAMISETA CUT OUT LIFE'
        const images = ['https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_1_1_1.jpg?ts=1629456820622', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_2_1_1.jpg?ts=1629455569144']
        const price = '15,95 EUR'
        const url = 'https://www.zara.com/es/es/camiseta-cut-out-life-p05644828.html'
        const description = 'Camiseta de cuello redondo y manga sisa. Detalle de aberturas laterales. Detalle de parche Life combinado a contraste.'
        const colors = ['Blanco']

        const item = { id, store, pattern, name, images, price, url, description, colors }

        const res = await registerItem(item)
            
        expect(res).to.be.undefined

        const registered = await Item.findOne({ id })
     
        expect(registered).to.exist
        expect(registered.store).to.equal(store)
        expect(registered.pattern).to.equal(pattern)
        expect(registered.name).to.equal(name)
        expect(registered.images[0]).to.equal(images[0])
        expect(registered.images[1]).to.equal(images[1])
        expect(registered.price).to.equal(price)
        expect(registered.url).to.equal(url)
        expect(registered.description).to.equal(description)
        expect(registered.colors[0]).to.equal(colors[0])  
    })

    describe('when item already exists', () => {
        let item 

        beforeEach(() => {
            item = {
                id: 'zarap05644828',
                store: 'Zara',
                pattern: 'Woman',
                name: 'CAMISETA CUT OUT LIFE',
                images: ['https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_1_1_1.jpg?ts=1629456820622', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_2_1_1.jpg?ts=1629455569144'],
                price: '15,95 EUR',
                url: 'https://www.zara.com/es/es/camiseta-cut-out-life-p05644828.html',
                description: 'Camiseta de cuello redondo y manga sisa. Detalle de aberturas laterales. Detalle de parche Life combinado a contraste.',
                colors: ['Blanco']
            }

            return Item.create(item) 
        })

        it('should fail when item already exists', async () => {
            const { id } = item
            try {
                await registerItem(item)

                throw new Error('should not reach this point')

            } catch(error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(ConflictError) 
                expect(error.message).to.equal(`item with id ${id} already exists`)
            }
        })
    })

    describe('when parameters are not valid', () => {
        describe('when item is not valid', () => {
            it('should fail when item is not an object', () => {
                expect(() => registerItem(true)).to.throw(TypeError, 'item is not an object')

                expect(() => registerItem(123)).to.throw(TypeError, 'item is not an object')

                expect(() => registerItem('')).to.throw(TypeError, 'item is not an object')

                expect(() => registerItem(() => { })).to.throw(TypeError, 'item is not an object')

                expect(() => registerItem([])).to.throw(TypeError, 'item is not an object')
            })
        })

        describe('when properties in item are not valid', () => {
            let item

            beforeEach(() => {
                item = {
                    id: 'zarap05644828',
                    store: 'Zara',
                    pattern: 'Woman',
                    name: 'CAMISETA CUT OUT LIFE',
                    images: ['https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_1_1_1.jpg?ts=1629456820622', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_2_1_1.jpg?ts=1629455569144'],
                    price: '15,95 EUR',
                    url: 'https://www.zara.com/es/es/camiseta-cut-out-life-p05644828.html',
                    description: 'Camiseta de cuello redondo y manga sisa. Detalle de aberturas laterales. Detalle de parche Life combinado a contraste.',
                    colors: ['Blanco']
                }
            })

            describe('when id is not valid', () => {
                it('should fail when id is not a string', () => {
                    item.id = true 
                    expect(() => registerItem(item)).to.throw(TypeError, 'id is not a string')

                    item.id = []
                    expect(() => registerItem(item)).to.throw(TypeError, 'id is not a string')

                    item.id = {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'id is not a string')

                    item.id = () => {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'id is not a string')

                    item.id = 123
                    expect(() => registerItem(item)).to.throw(TypeError, 'id is not a string')
                })

                it('should fail when id is empty', () => {
                    item.id = ''
                    expect(() => registerItem(item)).to.throw(FormatError, 'id is empty or blank')

                    item.id = '   '
                    expect(() => registerItem(item)).to.throw(FormatError, 'id is empty or blank')
                })

                it('should fail when id has spaces around', () => {
                    item.id = '  zarap05644828  '
                    expect(() => registerItem(item)).to.throw(FormatError, 'id has blank spaces')
                })
            })

            describe('when store is not valid', () => {
                it('should fail when store is not a string', () => {
                    item.store = true 
                    expect(() => registerItem(item)).to.throw(TypeError, 'store is not a string')

                    item.store = []
                    expect(() => registerItem(item)).to.throw(TypeError, 'store is not a string')

                    item.store = {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'store is not a string')

                    item.store = () => {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'store is not a string')

                    item.store = 123
                    expect(() => registerItem(item)).to.throw(TypeError, 'store is not a string')
                })

                it('should fail when store is empty', () => {
                    item.store = ''
                    expect(() => registerItem(item)).to.throw(FormatError, 'store is empty or blank')

                    item.store = '   '
                    expect(() => registerItem(item)).to.throw(FormatError, 'store is empty or blank')
                })

                it('should fail when store has spaces around', () => {
                    item.store = '  Zara  '
                    expect(() => registerItem(item)).to.throw(FormatError, 'blank spaces around store')
                })
            })

            describe('when pattern is not valid', () => {
                it('should fail when pattern is not a string', () => {
                    item.pattern = true 
                    expect(() => registerItem(item)).to.throw(TypeError, 'pattern is not a string')

                    item.pattern = []
                    expect(() => registerItem(item)).to.throw(TypeError, 'pattern is not a string')

                    item.pattern = {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'pattern is not a string')

                    item.pattern = () => {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'pattern is not a string')

                    item.pattern = 123
                    expect(() => registerItem(item)).to.throw(TypeError, 'pattern is not a string')
                })

                it('should fail when pattern is empty', () => {
                    item.pattern = ''
                    expect(() => registerItem(item)).to.throw(FormatError, 'pattern is empty or blank')

                    item.pattern = '   '
                    expect(() => registerItem(item)).to.throw(FormatError, 'pattern is empty or blank')
                })

                it('should fail when pattern has spaces around', () => {
                    item.pattern = '  Woman  '
                    expect(() => registerItem(item)).to.throw(FormatError, 'blank spaces around pattern')
                })
            })
 
            describe('when name is not valid', () => {
                describe('when name is not valid', () => {
                    it('should fail when name is not a string', () => {
                        item.name = true 
                        expect(() => registerItem(item)).to.throw(TypeError, 'name is not a string')
    
                        item.name = []
                        expect(() => registerItem(item)).to.throw(TypeError, 'name is not a string')
    
                        item.name = {}
                        expect(() => registerItem(item)).to.throw(TypeError, 'name is not a string')
    
                        item.name = () => {}
                        expect(() => registerItem(item)).to.throw(TypeError, 'name is not a string')
    
                        item.name = 123
                        expect(() => registerItem(item)).to.throw(TypeError, 'name is not a string')
                    })
    
                    it('should fail when name is empty', () => {
                        item.name = ''
                        expect(() => registerItem(item)).to.throw(FormatError, 'name is empty or blank')
    
                        item.name = '   '
                        expect(() => registerItem(item)).to.throw(FormatError, 'name is empty or blank')
                    })
    
                    it('should fail when name has spaces around', () => {
                        item.name = '  zara123593570  '
                        expect(() => registerItem(item)).to.throw(FormatError, 'blank spaces around name')
                    })
                })
            })

            describe('when images is not valid', () => {
                it('should fail when images is not an array', () => {
                    item.images = {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'images is not an array')

                    item.images = ''
                    expect(() => registerItem(item)).to.throw(TypeError, 'images is not an array')

                    item.images = () => {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'images is not an array')

                    item.images = true
                    expect(() => registerItem(item)).to.throw(TypeError, 'images is not an array')

                    item.images = 123
                    expect(() => registerItem(item)).to.throw(TypeError, 'images is not an array')
                })

                it('should fail when images is empty', () => {
                    item.images = []
                    expect(() => registerItem(item)).to.throw(FormatError, 'images is empty')
                })
            })

            describe('when price is not valid', () => {
                it('should fail when price is not a string', () => { 
                    item.price = true 
                    expect(() => registerItem(item)).to.throw(TypeError, 'price is not a string')

                    item.price = []
                    expect(() => registerItem(item)).to.throw(TypeError, 'price is not a string')

                    item.price = {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'price is not a string')

                    item.price = () => {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'price is not a string')

                    item.price = 123
                    expect(() => registerItem(item)).to.throw(TypeError, 'price is not a string')
                })

                it('should fail when price is empty', () => {
                    item.price = ''
                    expect(() => registerItem(item)).to.throw(FormatError, 'price is empty or blank')

                    item.price = '   '
                    expect(() => registerItem(item)).to.throw(FormatError, 'price is empty or blank')
                })

                it('should fail when price has spaces around', () => {
                    item.price = '  15,95 EUR  '
                    expect(() => registerItem(item)).to.throw(FormatError, 'blank spaces around price')
                })
            })

            describe('when url is not valid', () => {
                it('should fail when url is not a string', () => { 
                    item.url = true 
                    expect(() => registerItem(item)).to.throw(TypeError, 'url is not a string')

                    item.url = []
                    expect(() => registerItem(item)).to.throw(TypeError, 'url is not a string')

                    item.url = {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'url is not a string')

                    item.url = () => {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'url is not a string')

                    item.url = 123
                    expect(() => registerItem(item)).to.throw(TypeError, 'url is not a string')
                })

                it('should fail when url is empty', () => {
                    item.url = ''
                    expect(() => registerItem(item)).to.throw(FormatError, 'url is empty or blank')

                    item.url = '   '
                    expect(() => registerItem(item)).to.throw(FormatError, 'url is empty or blank')
                })

                it('should fail when url has spaces around', () => {
                    item.url = '  https://www.zara.com/es/es/camiseta-cut-out-life-p05644828.html?v1=123593570  '
                    expect(() => registerItem(item)).to.throw(FormatError, 'blank spaces around url')
                })
            })

            describe('when description is not valid', () => {
                it('should fail when description is not a string', () => { 
                    item.description = true 
                    expect(() => registerItem(item)).to.throw(TypeError, 'description is not a string')

                    item.description = []
                    expect(() => registerItem(item)).to.throw(TypeError, 'description is not a string')

                    item.description = {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'description is not a string')

                    item.description = () => {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'description is not a string')

                    item.description = 123
                    expect(() => registerItem(item)).to.throw(TypeError, 'description is not a string')
                })

                it('should fail when description is empty', () => {
                    item.description = ''
                    expect(() => registerItem(item)).to.throw(FormatError, 'description is empty or blank')

                    item.description = '   '
                    expect(() => registerItem(item)).to.throw(FormatError, 'description is empty or blank')
                })

                it('should fail when description has spaces around', () => {
                    item.description = '  Camiseta de cuello redondo y manga sisa. Detalle de aberturas laterales. Detalle de parche Life combinado a contraste.  '
                    expect(() => registerItem(item)).to.throw(FormatError, 'blank spaces around description')
                })
            })

            describe('when colors is not valid', () => {
                it('should fail when colors is not an array', () => {
                    item.colors = {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'colors is not an array')

                    item.colors = ''
                    expect(() => registerItem(item)).to.throw(TypeError, 'colors is not an array')

                    item.colors = () => {}
                    expect(() => registerItem(item)).to.throw(TypeError, 'colors is not an array')

                    item.colors = true
                    expect(() => registerItem(item)).to.throw(TypeError, 'colors is not an array')

                    item.colors = 123
                    expect(() => registerItem(item)).to.throw(TypeError, 'colors is not an array')
                })

                it('should fail when colors is empty', () => {
                    item.colors = []
                    expect(() => registerItem(item)).to.throw(FormatError, 'colors is empty')
                })
            })
        })
    })
    
    after(async () => {
        await Item.deleteMany()
        
        await mongoose.disconnect()
    })
})