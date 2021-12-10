require('dotenv').config()

const { expect } = require('chai')
const deleteNote = require('./delete-note')
const { mongoose, models: { Note } } = require('inmymind-data')
const { FormatError } = require('inmymind-errors')

const { env: { MONGO_URL } } = process

describe('deleteNote', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => Note.deleteMany())

    let note, noteId

    beforeEach(() => {
        note = {
            content: "New note",
            date: new Date("Thu, 09 Dec 2021 00:00:00 GMT"),
            user_id: "61ad1ad9799afee83e26c8b4",
            note_id:"61ad1ad9799afee83e26c8b5"
        }

        return Note.create(note)
            .then(note => noteId = note.id)
    })

    describe('When parameters are note valid', () => {
        describe('When id is not valid', () => {
            it('should fail when id is not a string', () => {
                expect(() => deleteNote(true)).to.throw(TypeError, 'id is not a string')

                expect(() => deleteNote(123)).to.throw(TypeError, 'id is not a string')

                expect(() => deleteNote({})).to.throw(TypeError, 'id is not a string')

                expect(() => deleteNote(() => { })).to.throw(TypeError, 'id is not a string')

                expect(() => deleteNote([])).to.throw(TypeError, 'id is not a string')
            })

            it('should fail when id is empty or blank', () => {
                expect(() => deleteNote('')).to.throw(FormatError, 'id is empty or blank')

                expect(() => deleteNote('   ')).to.throw(FormatError, 'id is empty or blank')
            })
        })
    })
    after(() => 
        Note.deleteMany()
            .then(() => mongoose.disconnet))
})