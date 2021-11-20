const unregisterUser = require('./unregister-user')
const registerUser = require('./register-user')


const { argv: [, , command] } = process 

if (command === 'register'){
    const { argv: [, , , name, username, password] } = process

    registerUser(name, username, password, error => {
        if(error){
            console.log(error.message)
            
            return
        }
        console.log(`User  ${name}  registered`)
    })
} else if (command === 'unregister'){
    const { argv: [, , , id, password] } = process

    unregisterUser(id, password, error =>{
        if(error){
            console.log(error.message)

            return
        }
        console.log(`User ${id} unregistered`)
    })
}else if(command === 'retrieve'){
    const { argv: [, , , id ] } = process

    

}else if(command === 'modify'){
    const { argv: [,,,id,name,username,oldpassword,newpassword]} = process

    modifyUser(id,{name,username,oldpassword,newpassword}, error =>{
        if(error) return console.log(error.message)

        console.log(`user ${id} modified`)
    })
}