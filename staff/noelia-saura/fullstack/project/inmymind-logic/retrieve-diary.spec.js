require('dotenv').config()

const { expect } = require('chai')
const retrieveDiary = require('./retrieve-diary')
const { mongoose, models: { Diary } } = require('inmymind-data')
const { Types: { ObjectId } } = mongoose
const { NotFoundError, FormatError } = require('inmymind-errors')


const { env: { MONGO_URL } } = process

describe('retrieveDiary', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => Diary.deleteMany())

    let diary, diaryId

    beforeEach( async () => {
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
        
        const _diary=Diary.create(diary)

        diaryId=_diary.id
     
    })

    it('should succeed with correct id for an already existing diary', async() => {

        const { date, user_id, emotional, timesleep, timetowakeup, qualitysleep,
        hydrate,quantityhydrate,exercise,meditation,earlywakeup,makethebed,cleanface,
        cleanteeth,shower, order, cleanhouse,changesheets,cooking,gotostreet,timetostreet}=diary

        try {
            await retrieveDiary(user_id, date)
            throw new Error ('should not reach this point')
            
        }catch(error){
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
        }
    })



    describe('when parameters are not valid', () => {
        describe('when id is not valid', () => {
            it('should fail when id is not a string', () => {
                expect(() => retrieveDiary
            (true, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveDiary
            (123, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveDiary
            ({}, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveDiary
            (() => { }, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveDiary
            ([], () => { })).to.throw(TypeError, 'id is not a string')
            })

            it('should fail when id is empty or blank', () => {
                expect(() => retrieveDiary
            ('', () => { })).to.throw(FormatError, 'id is empty or blank')

                expect(() => retrieveDiary
            ('   ', () => { })).to.throw(FormatError, 'id is empty or blank')
            })

            it('should fail when id has spaces', () => {
                expect(() => retrieveDiary
            (' abcd1234abcd1234abcd1234 ', () => { })).to.throw(FormatError, 'id has blank spaces')

                expect(() => retrieveDiary
            ('abcd 1234abc d1234abc d1234', () => { })).to.throw(FormatError, 'id has blank spaces')
            })

            
        })
    })

    after(async() =>{
        await Diary.deleteMany()
        await mongoose.disconnect()
    })
})