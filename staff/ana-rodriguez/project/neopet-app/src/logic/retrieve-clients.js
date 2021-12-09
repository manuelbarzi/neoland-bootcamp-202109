const retriveClients = (token) => {

    return new Promise((resolve,reject) => {

        const xhr = new XMLHttpRequest
        xhr.onload = () => {
            const {status,responseText} = xhr
            const client = JSON.parse(responseText)

            if (status === 400) reject ('wrong credential')
            else if(status === 404) reject('page not found')
            else if(status === 200) resolve(client)
        }
        xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
        xhr.setRequestHeader('Authorization', 'Bearer ' + token)
        xhr.send()
    })
}
export default retriveClients