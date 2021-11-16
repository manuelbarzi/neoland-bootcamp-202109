const { readFile, writeFile } = require('fs')

function modifyUser(id, name, username, password, callback) { // data => { name: ?, username: ?, password: ? }
    
    readFile('./users.json', 'utf8', (error, json) => {
        if (error) return callback(error)
        
        const users = JSON.parse(json)

        const user = users.find(user => user.id == id)

        if (!user){
            callback (new Error (`no user with id ${id} found`))
        }else if(name!=='.'){
            user.name=name
        }else if(username!=='.'){
            user.username=username
        }else if(password !=='.'){
            user.password=password
        }
        const json2 = JSON.stringify(users, null, 4)

        writeFile('./users.json', json2, error => {
            if (error) return callback(error)
            callback(null)
        })

    // TODO implement me
})

}
module.exports=modifyUser