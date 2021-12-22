require('dotenv').config()

const { expect } = require('chai')
const addNote = require('./add-note')
const { mongoose, models: { Note } } = require('inmymind-data')
const {FormatError } = require('inmymind-errors')


const { env: { MONGO_URL } } = process

describe('addNote', () => {
    before(() => mongoose.connect(MONGO_URL))

    beforeEach(() => Note.deleteMany())
    let note, noteId

    beforeEach(() => {
        note = {
            content: "New note",
            date: new Date("Thu, 09 Dec 2021 00:00:00 GMT"),
            user_id: "61ad1ad9799afee83e26c8b4"
        }

        return Note.create(note)
            .then(note=>noteId=note.id)
    })

    it('should succeed with new note', () => {
        const content = "New note"
        const date = new Date("Thu, 09 Dec 2021 00:00:00 GMT")
        const user_id = "61ad1ad9799afee83e26c8b4"

        return addNote(content, date, user_id)
            .then(res => {
                expect(res).to.be.undefined

                return Note.findOne({ date })
            })
            .then(note => {
                expect(note).to.exist
                expect(note.content).to.equal(content)
                expect(note.date.toString()).to.equal(date.toString())
            })
    })
    describe('when parameters are not valid', () => {
        describe('when content is not valid', () => {
            it('should fail when content is not a string', () => {
                expect(() => addNote(true, new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(TypeError, 'note is not a string')

                expect(() => addNote(123, new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(TypeError, 'note is not a string')

                expect(() => addNote({}, new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(TypeError, 'note is not a string')

                // expect(() => addNote(() => { }, new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(TypeError, 'note is not a string')

                expect(() => addNote([], new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(TypeError, 'note is not a string')
            })

            it('should fail when note is empty', () => {
                expect(() => addNote('', new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(FormatError, 'note is empty or blank')

                expect(() => addNote('   ', new Date("Thu, 09 Dec 2021 00:00:00 GMT"))).to.throw(FormatError, 'note is empty or blank')
            })
        })
    })
    after(() =>
        Note.deleteMany()
            .then(() => mongoose.disconnect())
    )
})
