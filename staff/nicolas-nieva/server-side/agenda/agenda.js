debugger
const fs = require('fs')
const { readFile, writeFile } = fs

const { argv: [, , command] } = process

if (command === 'list') // $ node contacts.js list
    readFile('./contacts.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error)

            return
        }

        const contacts = JSON.parse(json)


        console.log('ID NAME PHONE E-MAIL')

        contacts.forEach(({ id, name, phone, email }) => console.log(id, name, phone, email))
        // contacts.forEach((user) => console.log(user))
        
    })
else if (command === 'save') // $ node contacts.js save Mario 456456456 mario@mail.com
    readFile('./contacts.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error.message)

            return
        }

        const contacts = JSON.parse(json)

        const last = contacts[contacts.length - 1]

        const { argv: [, , , name, phone, email] } = process

        contacts.push({ id: last.id + 1, name, phone, email })

        const json2 = JSON.stringify(contacts, null, 4)

        writeFile('./contacts.json', json2, error => {
            if (error) {
                console.error(error.message)

                return
            }
            console.log('saved')
        })
    })
else if (command === 'find') // $ node agenda.js find peter
    readFile('./contacts.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error)

            return
        }

        const contacts = JSON.parse(json)
        const { argv: [, , , query] } = process //PREGUNTAR VENTU

        contacts.forEach(element => {
            if (element.name === query || element.phone === query || element.email  === query) {      

                console.log(element)

            }
        })
    })

else if (command === 'modify') //  $ node contacts.js modify 4 * * peter3@mail.com
    readFile('./contacts.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error)

            return
        }

        const contacts = JSON.parse(json)

        const { argv: [, , , id, name, phone, email] } = process

        const index = contacts.findIndex (element => element.id == id  )

        if (index < 0) 
            console.log('not found')
            else{ 
                let contact = contacts[index]
                let newContact = {
                    id: id,
                    name: (name === '*' || !name  ) ? contact.name : name ,
                    phone: (phone === '*' || !phone  ) ? contact.phone : phone ,
                    email: (email === '*' || !email  ) ? contact.email : email 

                    
                }
                contacts[index] = newContact

                const json2 = JSON.stringify(contacts, null, 4)

                writeFile('./contacts.json', json2, error => {
                    if (error) {
                        console.error(error.message)
        
                        return
                    }
                    console.log('user modify')
                })
                
            }
                  
        
    })
    else if (command === 'remove') //  $ node contacts.js modify 4 * * peter3@mail.com
    readFile('./contacts.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error)

            return
        }

        const contacts = JSON.parse(json)

        const { argv: [, , , id] } = process

        const index = contacts.findIndex (element => element.id == id  )

        if (index < 0) 
            console.log('not found')
            else{ 
                
                contacts.splice (index, 1)

                const json2 = JSON.stringify(contacts, null, 4)

                writeFile('./contacts.json', json2, error => {
                    if (error) {
                        console.error(error.message)
        
                        return
                    }
                    console.log('user deleted')
                })
                
            }
        
    })
    





// else if (command === 'remove') // $ node contacts.js remove 3
//     console.log('TODO implement me')
// else if (command === 'modify') // $ node contacts.js modify 4 * * peter3@mail.com
    // console.log('TODO implement me') 

