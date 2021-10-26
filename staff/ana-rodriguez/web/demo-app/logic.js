function signUpCall(firstName,lastName, email, password, confirmPassword, callback){
    if (!firstName.length) throw new Error('firstName is empty')
    if (!lastName.length) throw new Error('lastName is empty')
    if (!email.length) throw new Error('email is empty')
    if (!password.length) throw new Error('password is empty')
    if (!confirmPassword.length) throw new Error('confirmPassword is empty')

    var xhr = new XMLHttpRequest

    xhr.onload = function() {
        var status = xhr.status

        if(status === 409 || status === 400){
            var response = JSON.parse(xhr.responseText)

            var message = response.Error

            callback(newError(message))
        } else if (status === 201) {
            callback(null)
        }
            
    }


    xhr.open('POST','https://b00tc4mp.herokuapp.com/api/v2/users' )
    
    xhr.setRequestHeader('Content-Type', 'application/json')
     
    var body = {
        name: firstName +' '+ lastName,
        username: email,
        password: password
    }

    xhr.send(JSON.stringify(body))
}

// En archivo logic implemento la lógica de negocio que significa todo lo que tenga que ver con la llamada al servidor
// En archivo main recojo los datos que necesito pasarle a mi lógica de negocio
// Y después en la callback implemento todo lo necesario para la navegación de la página web

function signInCall(user,password,callback){ 
    if(!user.length) throw new Error('email is empty');
    if(!password.length) throw new Error ('password is empty')

    var xhr = new XMLHttpRequest

    xhr.onload = function(){
        var status = xhr.status

        var response = JSON.parse(xhr.responseText)
        var message = response.error
        
        
        if(status === 401){
            callback(new Error(message))
        }
        else if ( status === 200){
            var token = response.token
            callback(null,token)
        }  
    }
    xhr.open('POST','https://b00tc4mp.herokuapp.com/api/v2/users/auth' )
    
    xhr.setRequestHeader('Content-Type', 'application/json')

    var body = {
        username : user,
        password : password
    }  
    
    xhr.send(JSON.stringify(body))
  }

  function retrieveSignIn(token, callback) {
    if (!token) throw new Error('invalid token')

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if (status === 401) {
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 200) {
            var response = xhr.responseText

            var user = JSON.parse(response)

            callback(null, user)
        }
        
    }
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
  }    

  function profileCall(oldpassword,password,token,callback){
    if(!oldpassword.length) throw new Error('oldpassword is empty')
    if(!password.length) throw new Error ('password is empty')

    var xhr = new XMLHttpRequest

    xhr.onload = function(){
        var status = xhr.status

        if (status === 401) {
            var response = JSON.parse(xhr.responseText)

            var message = response.error

            callback(new Error(message))
        } else if (status === 204) {
            callback(null)
        }

    }
    xhr.open("PATCH", url + "users");
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.setRequestHeader('Content-Type', 'application/json');
    var body = {
        oldPassword : oldpassword,
        password    : password
    }
    xhr.send(JSON.stringify(body));
  }
  

 