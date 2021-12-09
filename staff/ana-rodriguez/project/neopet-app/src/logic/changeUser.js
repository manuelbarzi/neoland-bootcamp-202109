
function changeUser(user,username, email, token, callback){
   
    const xhr = new XMLHttpRequest

    const change = {
        user: user,
        username: username,
        email: email 
    }

    xhr.onload = function(){
        const status = xhr.status

        if(status === 401) callback (new Error ('user or username or email wrong'))
        else if(status === 404) callback (new Error('page not found'))
        else if(status === 400) callback(new Error('wrong credential'))
        else if(status === 204) callback()
    }
     
}
export default changeUser