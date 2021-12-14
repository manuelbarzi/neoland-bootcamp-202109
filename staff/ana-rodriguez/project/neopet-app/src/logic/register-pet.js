// qué necesito: nombre, appellido1, apellido2, teléfono, email, dni
// const objClient = {name, age, genre, race, species,layer,hair,chip, ref}
const registerPet = (client, pet, token) => {

    return new Promise((resolve, reject) => {
      
        const xhr = new XMLHttpRequest // Llama a BBDD para recuperar todos los clientes

        xhr.onload = () => {
            const {status, responseText} = xhr;
            if (status === 400) reject('wrong credentials')
            else if(status === 404) reject('page not found')
            else if(status === 200) {
                const clients = JSON.parse(responseText);
                const indexClient = clients.findIndex(_client => _client.document = client.document);
                
                if(indexClient === -1){
                    reject('Client not found');
                } else {
                    const xhr2 = new XMLHttpRequest;
                    xhr2.onload = () => {
                        const {status,responseText} = xhr2
                        if(status === 404) reject('Api not found')
                        else if( status === 400) reject('Wrong credentials')
                        else if( status === 409) reject('Pet alredy exists')
                        else if( status === 201 ) resolve(JSON.parse(responseText));
                    }
                
                    xhr2.open('POST', 'http://localhost:8000/pets');
                    xhr2.setRequestHeader('Content-Type', 'application/json');
                    // xhr2.setRequestHeader('Authorization', 'Bearer ' + token)
                    xhr2.send(JSON.stringify(pet));
                };
            };
        };

        xhr.open('GET', 'http://localhost:8000/clients')
        // xhr.setRequestHeader('Authorization', 'Bearer ' + token)
        xhr.send()
    })
}
export default registerPet