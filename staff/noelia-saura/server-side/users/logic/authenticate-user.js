const {readFile}=require('fs')

function authenticateUser (username,password,callback){
    readFile(`${__dirname}/../users.json`, 'utf8', (error, json)=>{
        if(error)return callback(error)

        const users=JSON.parse(json)

        const user=users.find(user=>user.username===username && user.password===password)

        if(!user)return console.log(new Error (`wrong credentials`))
        
        return callback(null,user.id)
    })
}

module.exports=authenticateUser