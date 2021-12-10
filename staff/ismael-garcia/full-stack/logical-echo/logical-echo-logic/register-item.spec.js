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
        const color = 'Blanco'

        const item = { id, name, images, price, url, description, color }

        const res = await registerItem(item)
            
        expect(res).to.be.undefined

        const registered = await Item.findOne({ id })
     
        expect(registered).to.exist
        expect(registered.name).to.equal(name)
        expect(registered.images).to.equal(images)
        expect(registered.price).to.equal(price)
        expect(registered.url).to.equal(url)
        expect(registered.description).to.equal(description)
        expect(registered.color).to.equal(color)  
    })

    describe('when item already exists', () => {
        let user 

        beforeEach(() => {
            user = {
                name: 'Wendy Pan',
                username: 'wendypan',
                password: '123123123'
            }

            return User.create(user) 
        })

        it('should fail when user already exists', async () => {
            const { name, username, password } = user

            try {
                await registerUser(name, username, password)

                throw new Error('should not reach this point')

            } catch(error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(ConflictError) 
                expect(error.message).to.equal(`user with username ${username} already exists`)
            }
        })
    })

    describe('when parameters are not valid', () => {
        describe('when name is not valid', () => {
            it('should fail when name is not a string', () => {
                expect(() => registerUser(true, 'wendypan', '123123123', () => { })).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser(123, 'wendypan', '123123123', () => { })).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser({}, 'wendypan', '123123123', () => { })).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser(() => { }, 'wendypan', '123123123', () => { })).to.throw(TypeError, 'name is not a string')

                expect(() => registerUser([], 'wendypan', '123123123', () => { })).to.throw(TypeError, 'name is not a string')
            })

            it('should fail when name is empty', () => {
                expect(() => registerUser('', 'wendypan', '123123123', () => { })).to.throw(FormatError, 'name is empty or blank')

                expect(() => registerUser('   ', 'wendypan', '123123123', () => { })).to.throw(FormatError, 'name is empty or blank')
            })

            it('should fail when name has spaces around', () => {
                expect(() => registerUser(' Wendy Pan ', 'wendypan', '123123123', () => { })).to.throw(FormatError, 'blank spaces around name')
            })
        })

        describe('when username is not valid', () => {
            it('should fail when username is not a string', () => {
                expect(() => registerUser('Wendy Pan', true, '123123123', () => { })).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', 123, '123123123', () => { })).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', {}, '123123123', () => { })).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', () => { }, '123123123', () => { })).to.throw(TypeError, 'username is not a string')

                expect(() => registerUser('Wendy Pan', [], '123123123', () => { })).to.throw(TypeError, 'username is not a string')
            })

            it('should fail when username is empty', () => {
                expect(() => registerUser('Wendy Pan', '', '123123123', () => { })).to.throw(FormatError, 'username is empty or blank')

                expect(() => registerUser('Wendy Pan', '   ', '123123123', () => { })).to.throw(FormatError, 'username is empty or blank')
            })

            it('should fail when username has spaces', () => {
                expect(() => registerUser('Wendy Pan', ' wendypan ', '123123123', () => { })).to.throw(FormatError, 'username has blank spaces')

                expect(() => registerUser('Wendy Pan', 'wendy pan', '123123123', () => { })).to.throw(FormatError, 'username has blank spaces')
            })

            it('should fail when username length is less that 4 characters', () => {
                expect(() => registerUser('Wendy Pan', 'wp', '123123123', () => { })).to.throw(FormatError, 'username has less than 4 characters')
            })
        })

        describe('when password is not valid', () => {
            it('should fail when password is not a string', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', true, () => { })).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', 123, () => { })).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', {}, () => { })).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', () => { }, () => { })).to.throw(TypeError, 'password is not a string')

                expect(() => registerUser('Wendy Pan', 'wendypan', [], () => { })).to.throw(TypeError, 'password is not a string')
            })

            it('should fail when password is empty', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', '', () => { })).to.throw(FormatError, 'password is empty or blank')

                expect(() => registerUser('Wendy Pan', 'wendypan', '   ', () => { })).to.throw(FormatError, 'password is empty or blank')
            })

            it('should fail when password has spaces', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', ' 123123123 ', () => { })).to.throw(FormatError, 'password has blank spaces')

                expect(() => registerUser('Wendy Pan', 'wendypan', '123 123 123', () => { })).to.throw(FormatError, 'password has blank spaces')
            })

            it('should fail when password length is less than 8 characters', () => {
                expect(() => registerUser('Wendy Pan', 'wendypan', '123123', () => { })).to.throw(FormatError, 'password has less than 8 characters')
            })
        })
    })
    
    after(async () => {
        await User.deleteMany()
        
        await mongoose.disconnect()
    })
})