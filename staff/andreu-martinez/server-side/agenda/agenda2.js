debugger
const fs = require('fs')
const { argv } = require('process')
const { callbackify } = require('util')
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
            console.error(error.message)
            return
        }

        const contacts = JSON.parse(json)
        const { argv: [, , , name] } = process

        const index = contacts.findIndex(contacts => contacts.name.toLowerCase() === name.toLowerCase())

        if (index < 0) console.log(`no existe usuario con nombre ${name}`)
        else console.log(contacts[index])
    })
else if (command === 'remove') // $ node agenda.js remove 3
    readFile('./agenda.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error.message)
            return
        }

        const contacts = JSON.parse(json)
        const { argv: [, , , email] } = process

        const index = contacts.findIndex(contacts => contacts.email.toLowerCase() === email.toLowerCase())

        if (index < 0) console.log(`no existe usuario con email: ${email}`)
        else {
            contacts.splice(index, 1)
            const json2 = JSON.stringify(contacts, null, 4)

            writeFile('./agenda.json', json2, error => {
                if (error) return callback(error)
                callback()
            })
        }

    })
else if (command === 'modify') // $ node agenda.js modify 4 * * peter3@mail.com
    readFile('agenda.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error.message)
            return
        }

        const contacts = JSON.parse(json)
        
        const { argv: [, , , userId, newName, newPhone, newEmail] } = process

        console.log(argv[5])

        const contact = contacts.filter( ({id}) => id === userId)
        
      
        if (contact.length < 1) console.log(`User with id ${userId} don't exists`)
        else {
                const {id, name, phone, email} = contact[0]
                const newContact = {
                 id: id,
                 name: newName || name,
                 phone: newPhone || phone,
                 email: newEmail || email               
            }
            contacts.forEach((contact, index) => {
                if(contact.id === id) contacts[index] = newContact
            })
            const json2 = JSON.stringify(contacts, null, 4)

            writeFile('./agenda.json', json2, (error, json) => {
                if (error) {
                    console.error(error.message)
                    return
                }
            })
        }
    })