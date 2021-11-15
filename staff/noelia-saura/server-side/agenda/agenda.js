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

        const { argv: [, , , contactname] } = process
        const contacts = JSON.parse(json)

        console.log('ID NAME PHONE E-MAIL')

        console.log(contacts.find(({ name }) => name.toLowerCase() === contactname))

    })
else if (command === 'filter') // $ node agenda.js filter gmail
    readFile('./agenda.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error)

            return
        }
        const { argv: [, , , filtergmail] } = process
        const contacts = JSON.parse(json)

        console.log('ID NAME PHONE E-MAIL')

        console.log(contacts.filter(({ email }) => email.includes(filtergmail)))
        // console.log(contacts[1].email)
        // console.log(filtergmail)

    })
else if (command === 'splice') // $ node agenda.js splice 3

    readFile('./agenda.json', 'utf8', (error, json) => {
        if (error) {
            console.error(error)

            return
        }
        const { argv: [, , , remove] } = process
        const contacts = JSON.parse(json)

        console.log('ID NAME PHONE E-MAIL')

        contacts.splice(remove, 1);
        console.log(contacts)
        const json2 = JSON.stringify(contacts, null, 4)

        writeFile('./agenda.json', json2, error => {
            if (error) {
                console.error(error.message)

                return
            }
        })
    })
else if (command === 'modify') // $ node agenda.js modify 4 * * * peter3@mail.com
    

readFile('./agenda.json', 'utf8', (error, json) => {

    if (error) {
        console.error(error)

        return
    }
    
    const contacts = JSON.parse(json)
    const { argv: [, , , , userId, newName, newPhone, newEmail] } = process
    const contact=contacts.filter(({id})=>id===userId)
if(contact.length<1)console.log(`user with id ${userId} don't exists`)
else{
    const{id,name,phone,email}=contact[0]
    const newContact={
        id:id,
        name:(newName==='*'||newName)?name:newName,
        phone:(newPhone==='*'||newPhone)?phone:newPhone,
        email:(newEmail==='*'||newEmail)?email:newEmail
    }
    contacts.forEach((contact,index)=>{
    if(contact.id===id)contacts[index]=newContact
})
    const json2 = JSON.stringify(contacts, null, 4)

    writeFile('./agenda.json', json2, error => {
        if (error) {
            console.error(error.message)

            return
        }
    })
}
})
