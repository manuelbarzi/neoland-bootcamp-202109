require('dotenv').config()

const { expect } = require('chai')
const addDisorder = require('./add-disorder')
const { mongoose, models: { Disorder } } = require('inmymind-data')
const { FormatError } = require('inmymind-errors')



const { env: { MONGO_URL } } = process

describe('addDisorder', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => Disorder.deleteMany())


    beforeEach(() => {
        disorder = {
            date: new Date("Thu, 09 Dec 2021 00:00:00 GMT"),
            user_id: "61ad1ad9799afee83e26c8b4",
            symptom: "Estres",
            relax: 3,
            negativestate: true,
            breathe: 2,
            initiatives: 3,
            whichinitiatives: "hablar",
            overreaction: 2,
            tremblehands: 4,
            paralyzed: 4,
            nerves: 3,
            worried: 2,
            whichworried: "trabajo",
            live: 4,
            sad: 4,
            verysleep: 2,
            panic: 4,
            enthuse: 3,
            value: 3,
            irritable: 3,
            afraid: 2,
            overthinking: 1,
            causedstate: "trabajo",
        }

        return Disorder.create(disorder)
            .then(disorder => disorderId = disorder.id)
    })
    it('should succeed with new disorder', () => {

        const date = new Date("Thu, 09 Dec 2021 00:00:00 GMT")
        const user_id = "61ad1ad9799afee83e26c8b4"
        const symptom = "Estres"
        const relax = 3
        const negativestate = true
        const breathe = 2
        const initiatives = 3
        const whichinitiatives = "hablar"
        const overreaction = 2
        const tremblehands = 4
        const paralyzed = 4
        const nerves = 3
        const worried = 2
        const whichworried = "trabajo"
        const live = 4
        const sad = 4
        const verysleep = 2
        const panic = 4
        const enthuse = 3
        const value = 3
        const irritable = 3
        const afraid = 2
        const overthinking = 1
        const causedstate = "trabajo"

        return addDisorder(
            date,
            user_id,
            symptom,
            relax,
            negativestate,
            breathe,
            initiatives,
            whichinitiatives,
            overreaction,
            tremblehands,
            paralyzed,
            nerves,
            worried,
            whichworried,
            live,
            sad,
            verysleep,
            panic,
            enthuse,
            value,
            irritable,
            afraid,
            overthinking,
            causedstate
        )
        
            .then(res => {
                expect(res).to.be.undefined

                return Disorder.findOne({ date })
            })
            .then(disorder => {
                expect(disorder).to.exist
                expect(disorder.date.toString()).to.equal(date.toString())
                expect(disorder.symptom).to.equal(symptom)
                expect(disorder.relax).to.equal(relax)
                expect(disorder.negativestate).to.equal(negativestate)
                expect(disorder.breathe).to.equal(breathe)
                expect(disorder.initiatives).to.equal(initiatives)
                expect(disorder.whichinitiatives).to.equal(whichinitiatives)
                expect(disorder.overreaction).to.equal(overreaction)
                expect(disorder.tremblehands).to.equal(tremblehands)
                expect(disorder.paralyzed).to.equal(paralyzed)
                expect(disorder.nerves).to.equal(nerves)
                expect(disorder.worried).to.equal(worried)
                expect(disorder.whichworried).to.equal(whichworried)
                expect(disorder.live).to.equal(live)
                expect(disorder.sad).to.equal(sad)
                expect(disorder.verysleep).to.equal(verysleep)
                expect(disorder.panic).to.equal(panic)
                expect(disorder.enthuse).to.equal(enthuse)
                expect(disorder.value).to.equal(value)
                expect(disorder.irritable).to.equal(irritable)
                expect(disorder.afraid).to.equal(afraid)
                expect(disorder.overthinking).to.equal(overthinking)
                expect(disorder.causedstate).to.equal(causedstate)
            })
    })
    // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a string')
           
    describe('when parameters are not valid', () => {

        describe('when symptom is not valid',()=>{
            it('should fail when symptom is not a string',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",true, 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a string')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",123, 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '123 is not a string')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",{}, 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a string')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",() => { }, 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a string')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",[], 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a string`)
           
            })

            it('should fail when emotional is empty', () => {
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(FormatError, 'string is empty or blank')
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'   ', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(FormatError, 'string is empty or blank')
        
            })
        })

        describe('when relax is not valid',()=>{
            it('should fail when relax is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', true,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 'string',true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', {},true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', () => { },true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', [],true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
           
            })
        })

        describe('when negativestate is not valid',()=>{
            it('should fail when negativestate is not a boolean',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,'string',2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a boolean')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,123,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '123 is not a boolean')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,{},2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a boolean')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,() => { },2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a boolean')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,[],2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a boolean`)
           
            })
        })

        describe('when breathe is not valid',()=>{
            it('should fail when breathe is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,true,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,'string',3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,{},3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,() => { },3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,[],3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
           
            })
        })

        describe('when initiatives is not valid',()=>{
            it('should fail when initiatives is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,true,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,'string','hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,{},'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,() => { },'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,[],'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
           
            })
        })

        describe('when whichinitiatives is not valid',()=>{
            it('should fail when whichinitiatives is not a string',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,true,2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a string')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,123,2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '123 is not a string')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,{},2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a string')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,() => { },2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a string')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,[],2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a string`)
           
            })

            it('should fail when whichinitiatives is empty', () => {
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(FormatError, 'string is empty or blank')
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'   ',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(FormatError, 'string is empty or blank')
        
            })
        })

        describe('when overreaction is not valid',()=>{
            it('should fail when overreaction is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',true,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar','string',4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',{},4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',() => { },4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',[],4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
           
            })
        })

        describe('when tremblehands is not valid',()=>{
            it('should fail when tremblehands is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,true,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,'string',4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,{},4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,() => { },4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,[],4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
           
            })
        })

        describe('when paralyzed is not valid',()=>{
            it('should fail when paralyzed is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,true,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,'string',3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,{},3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,() => { },3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,[],3,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
           
            })
        })

        describe('when nerves is not valid',()=>{
            it('should fail when nerves is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,true,2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,'string',2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,{},2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,() => { },2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,[],2,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
           
            })
        })

        describe('when worried is not valid',()=>{
            it('should fail when worried is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,true,'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,'string','trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,{},'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,() => { },'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,[],'trabajo',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
           
            })
        })

        describe('when whichworried is not valid',()=>{
            it('should fail when whichworried is not a string',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,true,4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a string')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,123,4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '123 is not a string')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,{},4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a string')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,() => { },4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a string')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,[],4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a string`)
           
            })

            it('should fail when whichworried is empty', () => {
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(FormatError, 'string is empty or blank')
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'   ',4,4,2,4,3,3,3,2,1,'trabajo')).to.throw(FormatError, 'string is empty or blank')
        
            })
        })

        describe('when live is not valid',()=>{
            it('should fail when live is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',true,4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo','string',4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',{},4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',() => { },4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',[],4,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
                
            })
        })

        describe('when sad is not valid',()=>{
            it('should fail when sad is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,true,2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,'string',2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,{},2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,() => { },2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,[],2,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
                
            })
        })

        describe('when verysleep is not valid',()=>{
            it('should fail when verysleep is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,true,4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,'string',4,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,{},4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,() => { },4,3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,[],4,3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
                
            })
        })

        describe('when panic is not valid',()=>{
            it('should fail when panic is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,true,3,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,'string',3,3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,{},3,3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,() => { },3,3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,[],3,3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
                
            })
        })

        describe('when enthuse is not valid',()=>{
            it('should fail when enthuse is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,true,3,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,'string',3,3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,{},3,3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,() => { },3,3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,[],3,3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
                
            })
        })

        describe('when value is not valid',()=>{
            it('should fail when value is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,true,3,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,'string',3,2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,{},3,2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,() => { },3,2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,[],3,2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
                
            })
        })

        describe('when irritable is not valid',()=>{
            it('should fail when irritable is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,true,2,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,'string',2,1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,{},2,1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,() => { },2,1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,[],2,1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
                
            })
        })

        describe('when afraid is not valid',()=>{
            it('should fail when afraid is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,true,1,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,'string',1,'trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,{},1,'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,() => { },1,'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,[],1,'trabajo')).to.throw(TypeError, `${[]} is not a number`)
                
            })
        })

        describe('when overthinking is not valid',()=>{
            it('should fail when overthinking is not a number',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,true,'trabajo')).to.throw(TypeError, 'true is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,'string','trabajo')).to.throw(TypeError, 'string is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,{},'trabajo')).to.throw(TypeError, '[object Object] is not a number')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,() => { },'trabajo')).to.throw(TypeError, '() => { } is not a number')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,[],'trabajo')).to.throw(TypeError, `${[]} is not a number`)
                
            })
        })

        describe('when causedstate is not valid',()=>{
            it('should fail when causedstate is not a string',()=>{
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,true)).to.throw(TypeError, 'true is not a string')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,123)).to.throw(TypeError, '123 is not a string')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,{})).to.throw(TypeError, '[object Object] is not a string')
           
                // expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,() => { })).to.throw(TypeError, '() => { } is not a string')
           
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,[])).to.throw(TypeError, `${[]} is not a string`)
           
            })

            it('should fail when causedstate is empty', () => {
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'')).to.throw(FormatError, 'string is empty or blank')
                
                expect(()=> addDisorder(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Estres', 3,true,2,3,'hablar',2,4,4,3,2,'trabajo',4,4,2,4,3,3,3,2,1,'   ')).to.throw(FormatError, 'string is empty or blank')
        
            })
        })

    })
    after(() =>
        Disorder.deleteMany()
            .then(() => mongoose.disconnect())
    )
})