
function authUser(username,password,callback) {
    const xhr = new XMLHttpRequest;

    const logUsuario = {
        username: username,
        password: password
    };
    
    xhr.onload = function (){
        const {status, responseText} = xhr
        const {token} = JSON.parse(responseText)
        if(status === 400) callback(new Error ('wrong credential'))
        else if(status === 401) callback(new Error ('username and/or password wrong'))
        else if(status === 404) callback(new Error('page not found'))
        else if(status === 200) callback(null, token)
    }
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(logUsuario));
}

export default authUser;