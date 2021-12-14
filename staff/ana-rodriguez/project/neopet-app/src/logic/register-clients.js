// qué necesito: nombre, appellido1, apellido2, teléfono, email, dni
// const objClient = {dni, name, firstName, lastName, phone, email} 
const registerClients = (client, token) => {

    return new Promise((resolve, reject) => {
      
        const xhr = new XMLHttpRequest 

        xhr.onload = () => {
            const {status, responseText} = xhr
            if (status === 400) reject('wrong credentials')
            else if(status === 404) reject('page not found')
            else if(status === 200) {
                const clients = JSON.parse(responseText)
                // Aquí detectamos si el cliente está o no registrado en BBDD
                const exsistsDuplicateClient = clients.some(_client => _client.dni === client.dni);
                
                if (exsistsDuplicateClient){
                    reject('Este cliente ya está registrado o el DNI no es correcto');
                } else { // Si no está registrado, iniciamos el proceso de registro
                    const xhr2 = new XMLHttpRequest

                    xhr2.onload = () => {
                        const {status,responseText} = xhr2
                        if(status === 404) reject('Api not found')
                        else if( status === 400) reject('Wrong credentials')
                        else if( status === 409) reject('Users alredy exists')
                        else if( status === 201 ) resolve(JSON.parse(responseText))
                    }
                
                    xhr2.open('POST', 'http://localhost:8000/clients')

                    xhr2.setRequestHeader('Content-Type', 'application/json')
                    // xhr2.setRequestHeader('Authorization', 'Bearer ' + token)
                    xhr2.send(JSON.stringify(client))
                }
            }
        }

        xhr.open('GET', 'http://localhost:8000/clients')
        // xhr.setRequestHeader('Authorization', 'Bearer ' + token)
        xhr.send()
    })
}
export default registerClients