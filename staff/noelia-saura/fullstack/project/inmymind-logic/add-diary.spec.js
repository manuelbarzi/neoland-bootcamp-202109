require('dotenv').config()

const { expect } = require('chai')
const addDiary = require('./add-diary')
const { mongoose, models: { Diary } } = require('inmymind-data')
const { FormatError } = require('inmymind-errors')


const { env: { MONGO_URL } } = process

describe('addDiary', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => Diary.deleteMany())


    beforeEach(() => {
        diary = {
            user_id: "61ad1ad9799afee83e26c8b4",
            date: new Date("Thu, 09 Dec 2021 00:00:00 GMT"),
            emotional: "Feliz",
            timesleep: 8,
            timetowakeup: "23:00h - 07:00h",
            qualitysleep: 4,
            hydrate: true,
            quantityhydrate: 4,
            exercise: false,
            meditation: false,
            earlywakeup: true,
            makethebed: true,
            cleanface: true,
            cleanteeth: false,
            shower: true,
            order: false,
            cleanhouse: false,
            changesheets: false,
            cooking: false,
            gotostreet: false,
            timetostreet: "30 minutos"
        }

        return Diary.create(diary)
            .then(diary => diaryId = diary.id)
    })
    it('should succeed with new diary', () => {
        
        const date = new Date("Thu, 09 Dec 2021 00:00:00 GMT")
        const user_id = "61ad1ad9799afee83e26c8b4"
        const emotional = "Feliz"
        const timesleep = 8
        const timetowakeup = "23:00h - 07:00h"
        const qualitysleep = 4
        const hydrate = true
        const quantityhydrate = 4
        const exercise = false
        const meditation = false
        const earlywakeup = true
        const makethebed = true
        const cleanface = true
        const cleanteeth = false
        const shower = true
        const order = false
        const cleanhouse = false
        const changesheets = false
        const cooking = false
        const gotostreet = false
        const timetostreet = "30 minutos"

        return addDiary(
            date,
            user_id,
            emotional,
            timesleep,
            timetowakeup,
            qualitysleep,
            hydrate,
            quantityhydrate,
            exercise,
            meditation,
            earlywakeup,
            makethebed,
            cleanface,
            cleanteeth,
            shower,
            order,
            cleanhouse,
            changesheets,
            cooking,
            gotostreet,
            timetostreet
        )
            .then(res => {
                expect(res).to.be.undefined

                return Diary.findOne({ date })
            })
            .then(diary => {
                expect(diary).to.exist
                expect(diary.date.toString()).to.equal(date.toString())
                expect(diary.emotional).to.equal(emotional)
                expect(diary.timesleep).to.equal(timesleep)
                expect(diary.timetowakeup).to.equal(timetowakeup)
                expect(diary.qualitysleep).to.equal(qualitysleep)
                expect(diary.hydrate).to.equal(hydrate)
                expect(diary.quantityhydrate).to.equal(quantityhydrate)
                expect(diary.exercise).to.equal(exercise)
                expect(diary.meditation).to.equal(meditation)
                expect(diary.earlywakeup).to.equal(earlywakeup)
                expect(diary.makethebed).to.equal(makethebed)
                expect(diary.cleanface).to.equal(cleanface)
                expect(diary.cleanteeth).to.equal(cleanteeth)
                expect(diary.shower).to.equal(shower)
                expect(diary.order).to.equal(order)
                expect(diary.cleanhouse).to.equal(cleanhouse)
                expect(diary.changesheets).to.equal(changesheets)
                expect(diary.cooking).to.equal(cooking)
                expect(diary.gotostreet).to.equal(gotostreet)
                expect(diary.timetostreet).to.equal(timetostreet)
            })
    })

    describe('when parameters are not valid', () => {

        describe('when emotional is not valid', () => {
            it('should fail when emotional is not a string', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", true,8,"23:00h - 07:00h",4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,"30 minutos")).to.throw(TypeError, 'true is not a string')
                
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 123 ,8,"23:00h - 07:00h",4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,"30 minutos")).to.throw(TypeError, '123 is not a string')
                
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", {},8,"23:00h - 07:00h",4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,"30 minutos")).to.throw(TypeError, '[object Object] is not a string')
                
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", () => { },8,"23:00h - 07:00h",4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,"30 minutos")).to.throw(TypeError, '() => { } is not a string')
                
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", [],8,"23:00h - 07:00h",4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,"30 minutos")).to.throw(TypeError, `${[]} is not a string`)
            })

            it('should fail when emotional is empty', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'',8,"23:00h - 07:00h",4,true,4,false,false,true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(FormatError, 'string is empty or blank')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", '   ', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(FormatError, 'string is empty or blank')
            })
        })
        describe('when timesleep is not valid', () => {
            it('should fail when timesleep is not a number', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', true, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, 'true is not a number')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 'string', "23:00h - 07:00h", 4,true, 4, false, false, true, true, true, false, true, false, false, false, false,false, "30 minutos")).to.throw(TypeError, 'string is not a number')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', {}, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a number')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', () => { }, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a number')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', [], "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a number`)

            })

        })
        describe('when timetowakeup is not valid', () => {
            it('should fail when timetowakeup is not a string', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz',8,true,4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,"30 minutos")).to.throw(TypeError, 'true is not a string')
                
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz',8,123 ,4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,"30 minutos")).to.throw(TypeError, '123 is not a string')
                
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz',8,{},4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,"30 minutos")).to.throw(TypeError, '[object Object] is not a string')
                
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz',8,() => { },4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,"30 minutos")).to.throw(TypeError, '() => { } is not a string')
                
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz',8,[],4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,"30 minutos")).to.throw(TypeError, `${[]} is not a string`)
            })

            it('should fail when timetowakeup is empty', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Feliz',8,'',4,true,4,false,false,true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(FormatError, 'string is empty or blank')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, '   ', 4, true, 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(FormatError, 'string is empty or blank')
            })
        })

        describe('when qualitysleep is not valid', () => {
            it('should fail when qualitysleep is not a number', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", true, true, 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, 'true is not a number')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 'string',true, 4, false, false, true, true, true, false, true, false, false, false, false,false, "30 minutos")).to.throw(TypeError, 'string is not a number')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", {}, true, 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a number')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", () => { }, true, 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a number')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", [], true, 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a number`)

            })
        })
        describe('when hydrate is not valid', () => {
            it('should fail when hydrate is not a boolean', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, 123, 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '123 is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4,'string', 4, false, false, true, true, true, false, true, false, false, false, false,false, "30 minutos")).to.throw(TypeError, 'string is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, {}, 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, () => { }, 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, [], 4, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a boolean`)

            })
        })

        describe('when quantityhydrate is not valid', () => {
            it('should fail when quantityhydrate is not a number', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, true, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, 'true is not a number')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4,true, 'string', false, false, true, true, true, false, true, false, false, false, false,false, "30 minutos")).to.throw(TypeError, 'string is not a number')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, {}, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a number')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, () => { }, false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a number')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, [], false, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a number`)

            })
        })

        describe('when exercise is not valid', () => {
            it('should fail when exercise is not a boolean', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, 123, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '123 is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, 'string', false, true, true, true, false, true, false, false, false, false,false, "30 minutos")).to.throw(TypeError, 'string is not a boolean')
 
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, {}, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, () => { }, false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, [], false, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a boolean`)

            })
        })

        describe('when meditation is not valid', () => {
            it('should fail when meditation is not a boolean', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, 123, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '123 is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, 'string', true, true, true, false, true, false, false, false, false,false, "30 minutos")).to.throw(TypeError, 'string is not a boolean')
 
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, {}, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, () => { }, true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, [], true, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a boolean`)

            })
        })

        describe('when earlywakeup is not valid', () => {
            it('should fail when earlywakeup is not a boolean', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, 123, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '123 is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, 'string', true, true, false, true, false, false, false, false,false, "30 minutos")).to.throw(TypeError, 'string is not a boolean')
 
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, {}, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, () => { }, true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, [], true, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a boolean`)

            })
        })

        describe('when makethebed is not valid', () => {
            it('should fail when makethebed is not a boolean', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, 123, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '123 is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, 'string', true, false, true, false, false, false, false,false, "30 minutos")).to.throw(TypeError, 'string is not a boolean')
 
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, {}, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, () => { }, true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, [], true, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a boolean`)

            })
        })

        describe('when cleanface is not valid', () => {
            it('should fail when cleanface is not a boolean', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, 123, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '123 is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, 'string', false, true, false, false, false, false,false, "30 minutos")).to.throw(TypeError, 'string is not a boolean')
 
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, {}, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, () => { }, false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, [], false, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a boolean`)

            })
        })

        describe('when cleanteeth is not valid', () => {
            it('should fail when cleanteeth is not a boolean', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, 123, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '123 is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, 'string', true, false, false, false, false,false, "30 minutos")).to.throw(TypeError, 'string is not a boolean')
 
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, {}, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, () => { }, true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, [], true, false, false, false, false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a boolean`)

            })
        })

        describe('when shower is not valid', () => {
            it('should fail when shower is not a boolean', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, 123, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '123 is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, 'string', false, false, false, false,false, "30 minutos")).to.throw(TypeError, 'string is not a boolean')
 
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, {}, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, () => { }, false, false, false, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, [], false, false, false, false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a boolean`)

            })
        })

        describe('when order is not valid', () => {
            it('should fail when order is not a boolean', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, 123, false, false, false, false, "30 minutos")).to.throw(TypeError, '123 is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, 'string', false, false, false,false, "30 minutos")).to.throw(TypeError, 'string is not a boolean')
 
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, {}, false, false, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, () => { }, false, false, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, [], false, false, false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a boolean`)

            })
        })

        describe('when cleanhouse is not valid', () => {
            it('should fail when cleanhouse is not a boolean', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, 123, false, false, false, "30 minutos")).to.throw(TypeError, '123 is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, 'string', false, false,false, "30 minutos")).to.throw(TypeError, 'string is not a boolean')
 
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, {}, false, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, () => { }, false, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, [], false, false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a boolean`)

            })
        })

        describe('when changesheets is not valid', () => {
            it('should fail when changesheets is not a boolean', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, 123, false, false, "30 minutos")).to.throw(TypeError, '123 is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, 'string', false,false, "30 minutos")).to.throw(TypeError, 'string is not a boolean')
 
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, {}, false, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, () => { }, false, false, "30 minutos")).to.throw(TypeError, '() => { } is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, [], false, false, "30 minutos")).to.throw(TypeError, `${[]} is not a boolean`)

            })
        })

        describe('when cooking is not valid', () => {
            it('should fail when cooking is not a boolean', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, 123, false, "30 minutos")).to.throw(TypeError, '123 is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, 'string',false, "30 minutos")).to.throw(TypeError, 'string is not a boolean')
 
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, {}, false, "30 minutos")).to.throw(TypeError, '[object Object] is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, () => { }, false, "30 minutos")).to.throw(TypeError, '() => { } is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, [], false, "30 minutos")).to.throw(TypeError, `${[]} is not a boolean`)

            })
        })

        describe('when gotostreet is not valid', () => {
            it('should fail when gotostreet is not a boolean', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, false, 123, "30 minutos")).to.throw(TypeError, '123 is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, false,'string', "30 minutos")).to.throw(TypeError, 'string is not a boolean')
 
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, false, {}, "30 minutos")).to.throw(TypeError, '[object Object] is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, false, () => { }, "30 minutos")).to.throw(TypeError, '() => { } is not a boolean')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8, "23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, false, [], "30 minutos")).to.throw(TypeError, `${[]} is not a boolean`)

            })
        })

        describe('when timetostreet is not valid', () => {
            it('should fail when timetostreet is not a string', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz',8,"23:00h - 07:00h",4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,true)).to.throw(TypeError, 'true is not a string')
                
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz',8, "23:00h - 07:00h",4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,123)).to.throw(TypeError, '123 is not a string')
                
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz',8,"23:00h - 07:00h",4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,{})).to.throw(TypeError, '[object Object] is not a string')
                
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz',8,"23:00h - 07:00h",4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,() => { })).to.throw(TypeError, '() => { } is not a string')
                
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4", 'Feliz',8,"23:00h - 07:00h",4,true,4,false,false,true,true,true,false,true,false,false,false,false,false,[])).to.throw(TypeError, `${[]} is not a string`)
            })

            it('should fail when timetowakeup is empty', () => {
                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"),"61ad1ad9799afee83e26c8b4",'Feliz',8,"23:00h - 07:00h",4,true,4,false,false,true, true, true, false, true, false, false, false, false, false, '')).to.throw(FormatError, 'string is empty or blank')

                expect(() => addDiary(new Date("Thu, 09 Dec 2021 00:00:00 GMT"), "61ad1ad9799afee83e26c8b4", 'Feliz', 8,"23:00h - 07:00h", 4, true, 4, false, false, true, true, true, false, true, false, false, false, false, false,  '   ')).to.throw(FormatError, 'string is empty or blank')
            })
        })

    })
    after(() =>
        Diary.deleteMany()
            .then(() => mongoose.disconnect())
    )
})