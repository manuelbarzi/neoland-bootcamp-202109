// Implement me

function RetrieveUser(token,callback){

    var xhr = new XMLHttpRequest

    xhr.onload = function () {
        var status = xhr.status

        if(status === 401) callback(new Error ('username and/or password wrong'))
        else if (status === 400)callback(new Error ('wrong credential')) 
        else if(status === 200) callback(null,username)
                        
        }  
      
    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', 'Bearer ' + token)

    xhr.send()
}
    
export default RetrieveUser