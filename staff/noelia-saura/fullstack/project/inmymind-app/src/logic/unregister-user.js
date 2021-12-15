function unregisterUser(token, password, callback) {
   

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, responseText } = xhr

        if (status === 400 || status === 401) {
            const response = JSON.parse(responseText)
            
            const message = response.error
            if('jwt expired'=== message){
                delete sessionStorage.token
            }
            callback(new Error(message))
        } else if (status === 204) {
            callback(null)
        }
    }

    xhr.open('DELETE', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.setRequestHeader('Content-Type', 'application/json')

    const body = { password }

    xhr.send(JSON.stringify(body))
}

export default unregisterUser