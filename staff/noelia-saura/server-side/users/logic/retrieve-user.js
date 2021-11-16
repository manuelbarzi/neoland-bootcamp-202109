const {readFile}=require('fs')

function retrieveUser(id, callback) {
    readFile('./users.json','utf8',(error,json)=>{
        if(error)return callback(error)

        const users=JSON.parse(json)

        const user=users.find(user=>user.id===id)

        if (!user) return callback(new Error(`user with id ${id} not exists`))
        
        return callback(null,user)
    })
    // TODO implement me
}

module.exports = retrieveUser