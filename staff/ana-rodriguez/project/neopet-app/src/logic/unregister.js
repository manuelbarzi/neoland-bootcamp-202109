function unregisterUser(password,token,callback){ // la callback es una función

    const xhr = new XMLHttpRequest
    const pass = {
        password: password
    }

    xhr.onload = function (){

        const status = xhr.status
      
        if(status === 401) callback (new Error ('password wrong'))
        else if(status === 404) callback (new Error('page not found'))
        else if(status === 400) callback(new Error('wrong credential'))
        else if(status === 204) callback()
    }

    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(pass))
}



export default unregisterUser