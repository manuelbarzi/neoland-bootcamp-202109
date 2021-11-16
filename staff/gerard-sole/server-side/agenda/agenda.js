const fs = require( 'fs' )
const { json } = require( 'stream/consumers' )
const { readFile, writeFile } = fs

const { argv: [, , command] } = process

if ( command === 'list' ) // $ node agenda.js list
    readFile( './contacts.json', 'utf8', ( error, json ) => {
        if ( error ) {
            console.error( error )

            return
        }

        const contacts = JSON.parse( json )

        contacts.forEach( ( { name, phone, email } ) => console.log( name, phone, email ) )
    } )
else if ( command === 'save' ) // $ node agenda.js save Mario 456456456 mario@mail.com
    readFile( './contacts.json', 'utf8', ( error, json ) => {
        if ( error ) {
            console.error( error.message )

            return
        }

        const contacts = JSON.parse( json )

        const { argv: [, , , name, phone, email] } = process

        contacts.push( { name, phone, email } )

        const json2 = JSON.stringify( contacts, null, 4 )

        writeFile( './contacts.json', json2, error => {
            if ( error ) {
                console.error( error.message )

                return
            }
        } )
    } )
else if ( command === 'find' ) // $ node agenda.js find peter
    readFile( './contacts.json', 'utf-8', ( error, json ) => {
        if ( error ) {
            console.error( error.message )

            return
        }
        const contacts = JSON.parse( json )
        let { argv: [, , , query] } = process
        query = query.toLowerCase
        contacts.forEach( element => {
            if ( element.name.toLowerCase.includes(query) || element.phone.includes(query) || element.email.toLower.case.includes(query) ) {
                console.log( element )
            }
        } )
    } )
    else if (command === 'remove') {// $ node agenda.js remove 3
        const start = Date.now()
    
        readFile('./contacts.json', 'utf8', (error, json) => {
            if (error) return console.error(error.message)
    
            const contacts = JSON.parse(json)
    
            const { argv: [, , , id] } = process
    
            const index = contacts.findIndex(contact => contact.id == id)
    
            if (index < 0) return console.error(`no contact with id ${id} found`)
    
            contacts.splice(index, 1)
    
            const json2 = JSON.stringify(contacts, null, 4)
    
            writeFile('./contacts.json', json2, error => {
                if (error) return console.error(error.message)
    
                const end = Date.now()
    
                console.log(`contact removed (${end - start}ms)`)
            })
        })
    } else if (command === 'modify') {// $ node agenda.js modify 4 . . peter3@mail.com
        const start = Date.now()
    
        readFile('./contacts.json', 'utf8', (error, json) => {
            if (error) return console.error(error.message)
    
            const contacts = JSON.parse(json)
    
            const { argv: [, , , id, name, phone, email] } = process
    
            const contact = contacts.find(contact => contact.id == id)
    
            if (!contact) return console.error(`no contact with id ${id} found`)
    
            if (name !== '.') contact.name = name
            // name !== '.' && (contact.name = name)
            if (phone !== '.') contact.phone = phone
            if (email !== '.')  contact.email = email
    
            const json2 = JSON.stringify(contacts, null, 4)
    
            writeFile('./contacts.json', json2, error => {
                if (error) return console.error(error.message)
    
                const end = Date.now()
    
                console.log(`contact modified (${end - start}ms)`)
            })
        })
    }