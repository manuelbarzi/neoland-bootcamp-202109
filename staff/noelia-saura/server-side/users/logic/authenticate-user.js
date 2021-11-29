const { models: { User } } = require('data')
const{validateUsername,validatePassword,validateCallback}=require('./helpers/validators')
const{ CredentialsError}=require('errors')

function authenticateUser(username, password) {
    validateUsername(username)
    validatePassword(password)
       
    return  User.findOne({username,password})
        .then((user)=>{
            if(!user) {
                throw new CredentialsError ('wrong credentials')
            }

            return user.id

        })
        .catch(error =>{
           throw error
        })
        
     // users.findOne({username,password},(error,user)=>{
    //     if(error) return callback(error)
    //     if(!user)return callback(new CredentialsError ('wrong credentials'))
    //     callback(null,user._id.toString())
    // })
   
}
module.exports = authenticateUser