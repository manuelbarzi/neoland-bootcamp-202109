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
        const id = 'zara123593570'
        const name = 'CAMISETA CUT OUT LIFE'
        const images = ['https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_1_1_1.jpg?ts=1629456820622', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_2_1_1.jpg?ts=1629455569144', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/334/5644828250_2_2_1.jpg?ts=1629456828810', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/334/5644828250_6_1_1.jpg?ts=1629384843304', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/334/5644828250_6_2_1.jpg?ts=1629384837252', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/334/5644828250_6_3_1.jpg?ts=1629384913335']
        const price = '15,95 EUR'
        const url = 'https://www.zara.com/es/es/camiseta-cut-out-life-p05644828.html?v1=123593570'
        const description = 'Camiseta de cuello redondo y manga sisa. Detalle de aberturas laterales. Detalle de parche Life combinado a contraste.'
        const colors = ['Blanco']

        const item = { id, name, images, price, url, description, colors }

        const res = await registerItem(item)
            
        expect(res).to.be.undefined

        const registered = await Item.findOne({ id })
     
        expect(registered).to.exist
        expect(registered.name).to.equal(name)
        expect(registered.images[0]).to.equal(images[0])
        expect(registered.images[1]).to.equal(images[1])
        expect(registered.images[2]).to.equal(images[2])
        expect(registered.images[3]).to.equal(images[3])
        expect(registered.images[4]).to.equal(images[4])
        expect(registered.images[5]).to.equal(images[5])
        expect(registered.price).to.equal(price)
        expect(registered.url).to.equal(url)
        expect(registered.description).to.equal(description)
        expect(registered.colors[0]).to.equal(colors[0])  
    })

    describe('when item already exists', () => {
        let item 

        beforeEach(() => {
            item = {
                id: 'zara123593570',
                name: 'CAMISETA CUT OUT LIFE',
                images: ['https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_1_1_1.jpg?ts=1629456820622', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_2_1_1.jpg?ts=1629455569144', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/334/5644828250_2_2_1.jpg?ts=1629456828810', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/334/5644828250_6_1_1.jpg?ts=1629384843304', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/334/5644828250_6_2_1.jpg?ts=1629384837252', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/334/5644828250_6_3_1.jpg?ts=1629384913335'],
                price: '15,95 EUR',
                url: 'https://www.zara.com/es/es/camiseta-cut-out-life-p05644828.html?v1=123593570',
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
            let item = {
                id: 'zara123593570',
                name: 'CAMISETA CUT OUT LIFE',
                images: ['https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_1_1_1.jpg?ts=1629456820622', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/860/5644828250_2_1_1.jpg?ts=1629455569144', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/334/5644828250_2_2_1.jpg?ts=1629456828810', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/334/5644828250_6_1_1.jpg?ts=1629384843304', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/334/5644828250_6_2_1.jpg?ts=1629384837252', 'https://static.zara.net/photos///2021/I/0/1/p/5644/828/250/2/w/334/5644828250_6_3_1.jpg?ts=1629384913335'],
                price: '15,95 EUR',
                url: 'https://www.zara.com/es/es/camiseta-cut-out-life-p05644828.html?v1=123593570',
                description: 'Camiseta de cuello redondo y manga sisa. Detalle de aberturas laterales. Detalle de parche Life combinado a contraste.',
                colors: ['Blanco']
            }

            describe('when id is not valid', () => {
                it('should fail when id is not a string', () => {
                    const item2 = item 

                    item2.id = true 
                    expect(() => registerItem(item2)).to.throw(TypeError, 'id is not a string')

                    item2.id = []
                    expect(() => registerItem(item2)).to.throw(TypeError, 'id is not a string')

                    item2.id = {}
                    expect(() => registerItem(item2)).to.throw(TypeError, 'id is not a string')

                    item2.id = () => {}
                    expect(() => registerItem(item2)).to.throw(TypeError, 'id is not a string')

                    item2.id = 123
                    expect(() => registerItem(item2)).to.throw(TypeError, 'id is not a string')
                })

                it('should fail when id is empty', () => {
                    const item2 = item

                    item2.id = ''
                    expect(() => registerItem(item2)).to.throw(FormatError, 'id is empty or blank')

                    item2.id = '   '
                    expect(() => registerItem(item2)).to.throw(FormatError, 'id is empty or blank')
                })

                it('should fail when id has spaces around', () => {
                    const item2 = item

                    item2.id = '  zara123593570  '
                    expect(() => registerItem(item2)).to.throw(FormatError, 'blank spaces around id')
                })
            })
 
            describe('when name is not valid', () => {
                describe('when name is not valid', () => {
                    it('should fail when name is not a string', () => {
                        const item2 = item 
    
                        item2.name = true 
                        expect(() => registerItem(item2)).to.throw(TypeError, 'name is not a string')
    
                        item2.name = []
                        expect(() => registerItem(item2)).to.throw(TypeError, 'name is not a string')
    
                        item2.name = {}
                        expect(() => registerItem(item2)).to.throw(TypeError, 'name is not a string')
    
                        item2.name = () => {}
                        expect(() => registerItem(item2)).to.throw(TypeError, 'name is not a string')
    
                        item2.name = 123
                        expect(() => registerItem(item2)).to.throw(TypeError, 'name is not a string')
                    })
    
                    it('should fail when name is empty', () => {
                        const item2 = item
    
                        item2.name = ''
                        expect(() => registerItem(item2)).to.throw(FormatError, 'name is empty or blank')
    
                        item2.name = '   '
                        expect(() => registerItem(item2)).to.throw(FormatError, 'name is empty or blank')
                    })
    
                    it('should fail when name has spaces around', () => {
                        const item2 = item
    
                        item2.name = '  zara123593570  '
                        expect(() => registerItem(item2)).to.throw(FormatError, 'blank spaces around name')
                    })
                })
            })

            describe('when images is not valid', () => {
                it('should fail when images is not an array', () => {
                    const item2 = item

                    item2.images = {}
                    expect(() => registerItem(item2)).to.throw(TypeError, 'images is not an array')

                    item2.images = ''
                    expect(() => registerItem(item2)).to.throw(TypeError, 'images is not an array')

                    item2.images = () => {}
                    expect(() => registerItem(item2)).to.throw(TypeError, 'images is not an array')

                    item2.images = true
                    expect(() => registerItem(item2)).to.throw(TypeError, 'images is not an array')

                    item2.images = 123
                    expect(() => registerItem(item2)).to.throw(TypeError, 'images is not an array')
                })

                it('should fail when images is empty', () => {
                    const item2 = item

                    item2.images = []
                    expect(() => registerItem(item2)).to.throw(FormatError, 'images is empty')
                })
            })

            describe('when price is not valid', () => {
                it('should fail when price is not a string', () => {
                    const item2 = item 

                    item2.price = true 
                    expect(() => registerItem(item2)).to.throw(TypeError, 'price is not a string')

                    item2.price = []
                    expect(() => registerItem(item2)).to.throw(TypeError, 'price is not a string')

                    item2.price = {}
                    expect(() => registerItem(item2)).to.throw(TypeError, 'price is not a string')

                    item2.price = () => {}
                    expect(() => registerItem(item2)).to.throw(TypeError, 'price is not a string')

                    item2.price = 123
                    expect(() => registerItem(item2)).to.throw(TypeError, 'price is not a string')
                })

                it('should fail when price is empty', () => {
                    const item2 = item

                    item2.price = ''
                    expect(() => registerItem(item2)).to.throw(FormatError, 'price is empty or blank')

                    item2.price = '   '
                    expect(() => registerItem(item2)).to.throw(FormatError, 'price is empty or blank')
                })

                it('should fail when price has spaces around', () => {
                    const item2 = item

                    item2.price = '  15,95 EUR  '
                    expect(() => registerItem(item2)).to.throw(FormatError, 'blank spaces around price')
                })
            })

            describe('when url is not valid', () => {
                it('should fail when url is not a string', () => {
                    const item2 = item 

                    item2.url = true 
                    expect(() => registerItem(item2)).to.throw(TypeError, 'url is not a string')

                    item2.url = []
                    expect(() => registerItem(item2)).to.throw(TypeError, 'url is not a string')

                    item2.url = {}
                    expect(() => registerItem(item2)).to.throw(TypeError, 'url is not a string')

                    item2.url = () => {}
                    expect(() => registerItem(item2)).to.throw(TypeError, 'url is not a string')

                    item2.url = 123
                    expect(() => registerItem(item2)).to.throw(TypeError, 'url is not a string')
                })

                it('should fail when url is empty', () => {
                    const item2 = item

                    item2.url = ''
                    expect(() => registerItem(item2)).to.throw(FormatError, 'url is empty or blank')

                    item2.url = '   '
                    expect(() => registerItem(item2)).to.throw(FormatError, 'url is empty or blank')
                })

                it('should fail when url has spaces around', () => {
                    const item2 = item

                    item2.url = '  https://www.zara.com/es/es/camiseta-cut-out-life-p05644828.html?v1=123593570  '
                    expect(() => registerItem(item2)).to.throw(FormatError, 'blank spaces around url')
                })
            })

            describe('when description is not valid', () => {
                it('should fail when description is not a string', () => {
                    const item2 = item 

                    item2.description = true 
                    expect(() => registerItem(item2)).to.throw(TypeError, 'description is not a string')

                    item2.description = []
                    expect(() => registerItem(item2)).to.throw(TypeError, 'description is not a string')

                    item2.description = {}
                    expect(() => registerItem(item2)).to.throw(TypeError, 'description is not a string')

                    item2.description = () => {}
                    expect(() => registerItem(item2)).to.throw(TypeError, 'description is not a string')

                    item2.description = 123
                    expect(() => registerItem(item2)).to.throw(TypeError, 'description is not a string')
                })

                it('should fail when description is empty', () => {
                    const item2 = item

                    item2.description = ''
                    expect(() => registerItem(item2)).to.throw(FormatError, 'description is empty or blank')

                    item2.description = '   '
                    expect(() => registerItem(item2)).to.throw(FormatError, 'description is empty or blank')
                })

                it('should fail when description has spaces around', () => {
                    const item2 = item

                    item2.description = '  Camiseta de cuello redondo y manga sisa. Detalle de aberturas laterales. Detalle de parche Life combinado a contraste.  '
                    expect(() => registerItem(item2)).to.throw(FormatError, 'blank spaces around description')
                })
            })

            describe('when colors is not valid', () => {
                it('should fail when colors is not an array', () => {
                    const item2 = item

                    item2.colors = {}
                    expect(() => registerItem(item2)).to.throw(TypeError, 'colors is not an array')

                    item2.colors = ''
                    expect(() => registerItem(item2)).to.throw(TypeError, 'colors is not an array')

                    item2.colors = () => {}
                    expect(() => registerItem(item2)).to.throw(TypeError, 'colors is not an array')

                    item2.colors = true
                    expect(() => registerItem(item2)).to.throw(TypeError, 'colors is not an array')

                    item2.colors = 123
                    expect(() => registerItem(item2)).to.throw(TypeError, 'colors is not an array')
                })

                it('should fail when colors is empty', () => {
                    const item2 = item

                    item2.colors = []
                    expect(() => registerItem(item2)).to.throw(FormatError, 'colors is empty')
                })
            })
        })
    })
    
    after(async () => {
        await Item.deleteMany()
        
        await mongoose.disconnect()
    })
})