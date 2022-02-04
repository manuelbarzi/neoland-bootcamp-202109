require('dotenv').config()

const { expect } = require('chai')
const retrieveNotes = require('./retrieve-notes')
const { mongoose, models: { Note } } = require('inmymind-data')
const { Types: { ObjectId } } = mongoose
const { NotFoundError, FormatError } = require('inmymind-errors')

const { env: { MONGO_URL } } = process

describe('retrieveNotes', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => Note.deleteMany())

    let note, noteId

    beforeEach(async () => {
        note = {
            content: "New note",
            date: new Date("Thu, 09 Dec 2021 00:00:00 GMT"),
            user_id: "61ad1ad9799afee83e26c8b4"
        }
        return Note.create(note)
        .then(note => noteId = note.id)
        
    })

    it('should succeed with correct id for an already existing note', () => {
        const content = "New note"
        const date = new Date("Thu, 09 Dec 2021 00:00:00 GMT")
        const user_id = "61ad1ad9799afee83e26c8b4"

        return retrieveNotes(user_id, date)
            .then(notes => {
                const note = notes[0]

                expect(note).to.exist
                expect(note.content).to.equal(content)
                expect(note.date.toString()).to.equal(date.toString())
            })
    })



    describe('when parameters are not valid', () => {
        describe('when id is not valid', () => {
            it('should fail when id is not a string', () => {
                expect(() => retrieveNotes
            (true, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveNotes
            (123, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveNotes
            ({}, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveNotes
            (() => { }, () => { })).to.throw(TypeError, 'id is not a string')

                expect(() => retrieveNotes
            ([], () => { })).to.throw(TypeError, 'id is not a string')
            })

            it('should fail when id is empty or blank', () => {
                expect(() => retrieveNotes
            ('', () => { })).to.throw(FormatError, 'id is empty or blank')

                expect(() => retrieveNotes
            ('   ', () => { })).to.throw(FormatError, 'id is empty or blank')
            })

            it('should fail when id has spaces', () => {
                expect(() => retrieveNotes
            (' abcd1234abcd1234abcd1234 ', () => { })).to.throw(FormatError, 'id has blank spaces')

                expect(() => retrieveNotes
            ('abcd 1234abc d1234abc d1234', () => { })).to.throw(FormatError, 'id has blank spaces')
            })

           
        })
    })

    after(async() =>{
        await Note.deleteMany()
        await mongoose.disconnect()
    })
   
})