const { registerUser, unregisterUser, authenticateUser, retrieveUser, modifyUser } = require('./logic')

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
} else if (command === 'retrieve') { // $ node manager retrieve kw0mnxla
    // TODO implement me
    const { argv: [, , , id] } = process
    retrieveUser(id,(error,user)=> {
        if (error){
            console.log(error.message)
            
        }else{
            console.log(`user ${user.name} retrieved`)
            return
        }
        
    })
} else if (command === 'find') { // $ node manager find pan
    // TODO implement me
    const { argv: [, , , query] } = process
    findUsers(query, (error,results) => {
        if (error) {
            console.log(error.message)
        }else{
            results.forEach(user=>{console.log(user.name,user.username)}

            )
        }
    })
} else if (command === 'modify') { 
    // $ node manager modify kw0ms3h9 * * 123123123:234234234
    // $ node manager modify kw0ms3h9 "Juanito Perez" * *

    const { argv: [, , , id,name,username,password] } = process
    modifyUser(id,name,username,password,error=>{
        if(error){
             console.log(error.message)
             
        }else{
            console.log('user modify')
        }
    })

}else if(command==='authenticate'){ // $ node manger authenticate peterpan 123123123
    const{argv:[, , , username,password]}= process
    authenticateUser(username,password,(error,id)=>{
        if(error){
            console.log(error.message)
        }else{
            console.log(`user with ${id} authenticated`)
        }
        
    })
}
