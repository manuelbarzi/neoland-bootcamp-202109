// Implement me
// Qué parametros necesito
// Qué aplico
// Qué devuelvo en la callback (no return, sino callback)
function registerUser(user, username, email, password, callback) {

    var xhr = new XMLHttpRequest

    var usuario = {
        user: user,
        username: username,
        email: email,
        password: password
    }
    xhr.onload = function () {
        const {status} = xhr
        if(status === 404) callback(new Error('Api not found'))
        else if( status === 400) callback(new Error('Wrong credentials'))
        else if( status=== 409) callback(new Error('Users alredy exists'))
        else if( status === 201 ) callback(null,'usuario registrado correctamente')

    }

    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send(JSON.stringify(usuario))
}

export default registerUser
// Qué tengo que mandar??

// Qué tengo que hacer con la respuesta