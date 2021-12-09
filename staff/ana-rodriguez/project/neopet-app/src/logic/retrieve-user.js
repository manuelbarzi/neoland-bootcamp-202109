// Implement me

function retrieveUser(token, callback){

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const {status, responseText} = xhr
        const user = JSON.parse(responseText)

        if(status === 401) callback(new Error ('username and/or password wrong'))
        else if (status === 400) callback(new Error ('wrong credential'))
        else if(status === 404) callback(new Error('page not found'))
        else if(status === 200) callback(null, user)
                        
        }  
      
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}
    
export default retrieveUser