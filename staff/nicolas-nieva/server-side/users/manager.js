const findUsers = require('./logic/find-users')
const modifyUser = require('./logic/modify-user')
const registerUser = require('./logic/register-user')
const retrieveUser = require('./logic/retrieve-user')
const unregisterUser = require('./logic/unregister-user')

const { argv: [, , command] } = process

if (command === 'register') { // $ node manager register "Peter Pan" peterpan 123123123
    const { argv: [, , , name, username, password] } = process

    registerUser(name, username, password, error => {
        if (error) {
            console.log(error.message)

            return
        }

        console.log('user registered')
    })
} else if (command === 'unregister') { // $ node manager unregister kw0mnxlk 123123123
    const { argv: [, , , id, password] } = process

    unregisterUser(id, password, error => {
        if (error) {
            console.log(error.message)

            return
        }

        console.log(`user ${id} unregistered`)
    })
} else if (command === 'retrieve') { // $ node manager retrieve kw0ms3h9
    const { argv: [, , , id]} = process

    retrieveUser (id, (error,user) => {
        if (error) {
            console.log (error.message)

            return
        }

        console.log (`user ${user.name} recuperado`)
        return user
        
    } )
} else if (command === 'find') { // $ node manager find pan
    const { argv: [, , , query]} = process

    findUsers (query, (error,results) => {
        if(error)return console.log (error.message) 
    
    results.forEach(({name, username, password }) => console.log(name, username, password))
        
    })

} else if (command === 'modify') { // $ node manager modify kw0ms3h9 * * 123123123:234234234
                                   // $ node manager modify kw0ms3h9 "Juanito Perez" * *
    const { argv: [, , , id, name, username,password, oldpassword]} = process         
    modifyUser (id, name, username, password, oldpassword, (error,user) =>{
    if (error) return console.log (error.message) 

    console.log (`user ${user.name} modificado`)
    
    return 
})
}