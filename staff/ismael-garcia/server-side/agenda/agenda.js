debugger
const fs = require('fs')
const { readFile, writeFile } = fs

const { argv: [, , command] } = process

if (command === 'list') // $ node agenda.js list
    readFile('./agenda.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error)

            return
        }

        const contacts = JSON.parse(json)

        console.log('ID NAME PHONE E-MAIL')

        contacts.forEach(({ id, name, phone, email }) => console.log(id, name, phone, email))
    })
else if (command === 'save') // $ node agenda.js save Mario 456456456 mario@mail.com
    readFile('./agenda.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error.message)

            return
        }

        const contacts = JSON.parse(json)

        const last = contacts[contacts.length - 1]

        const { argv: [, , , name, phone, email] } = process

        contacts.push({ id: last.id + 1, name, phone, email })

        const json2 = JSON.stringify(contacts, null, 4)
    
        writeFile('./agenda.json', json2, error => {
            if (error) {
                console.error(error.message)

                return
            }
        })
    })
else if (command === 'find') // $ node agenda.js find peter
    readFile('./agenda.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error)

            return
        }

        const contacts = JSON.parse(json)

        const { argv: [, , , query] } = process

        const match = contacts.filter(contact => {
            for (const key in contact) {
                const lowKey = key.toLowerCase()

                lowKey.includes(query)
            }
        })

        console.log(match)
    })
else if (command === 'remove') // $ node agenda.js remove 3
    readFile('./agenda.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error)

            return
        }

        const contacts = JSON.parse(json)

        const { argv: [, , , id] } = process

        contacts.forEach(contact => {
            if (contact.id === id) {
                contacts.splice(contact)

                return contacts
            }
        })

        const json2 = JSON.stringify(contacts, null, 4)
    
        writeFile('./agenda.json', json2, error => {
            if (error) {
                console.error(error.message)

                return
            }
        })
    })
else if (command === 'modify') // $ node agenda.js modify 4 * * peter3@mail.com
    readFile('./agenda.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error.message)

            return
        }

        const contacts = JSON.parse(json)

        const { argv: [, , , id, name, phone, email] } = process

        contacts.forEach(contact => {
            if (contact.id === id) {
                if (name !== '*' && name !== undefined) {
                    contact.name = name
                } else if (phone !== '*' && phone !== undefined) {
                    contact.phone = phone
                } else if (email !== '*' && email !== undefined) {
                    contact.email = email
                }
            }
        })

        const json2 = JSON.stringify(contacts, null, 4)

        writeFile('./agenda.json', json2, error => {
            if (error) {
                console.error(error.message)

                return
            }
        })
    })

    