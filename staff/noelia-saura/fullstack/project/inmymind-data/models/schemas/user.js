const{Schema}=require('mongoose')

const user= new Schema({

    
    name:{
        type:String,
        required:true
    },
    
    username:{
        type:String,
        required:true,
        unique:true,
        validate:[
            {
                validator(username){
                    return username.length > 3
                },
                message:'Usuario muy corto'
            },
            {
                validator(username){
                    return !username.includes(' ')
                },
                message:'Usuario contiene espacios'
            }
        ]
    },
    password:{
        type:String,
        required:true,
        validate:[
            {validator(password){
                return password.length>6
            },
            message:'Contraseña muy corta'
        },
        {
            validator(password){
                return !password.includes(' ')
            },
            message:'Contraseña contiene espacios'
        }
        ]
    }
    
    
})

module.exports= user