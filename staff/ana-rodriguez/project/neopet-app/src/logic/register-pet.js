// qué necesito: nombre, appellido1, apellido2, teléfono, email, dni
// const objClient = {name, age, genre, race, species,layer,hair,chip, ref}
const registerPet = (client, pet, token) => {

    return new Promise((resolve, reject) => {
      
        const xhr = new XMLHttpRequest // Llama a BBDD para recuperar todos los clientes

        xhr.onload = () => {
            const {status, responseText} = xhr
            if (status === 400) reject('wrong credentials')
            else if(status === 404) reject('page not found')
            else if(status === 200) {

                const {clients = []}= JSON.parse(responseText)
                const indexClient = clients. findIndex(_client => _client.dni = client.dni)
                if(indexClient === -1) reject('Client not found')
                let {pets = []} = clients[indexClient]
                const exsistsDuplicatePet = pets.some(_pet => _pet.ref === pet.ref)
                // Aquí detectamos si el cliente está o no registrado en BBDD

                if (exsistsDuplicatePet) reject('Esta mascota ya está registrado o el DNI no es correcto')
                else { // Si no está registrado, iniciamos el proceso de registro
                    pets.push(pet)
                    clients.pets = pets
                    const xhr2 = new XMLHttpRequest

                    xhr2.onload = () => {
                        const {status2} = xhr2
                        if(status2 === 404) reject('Api not found')
                        else if( status2 === 400) reject('Wrong credentials')
                        else if( status2 === 409) reject('Pet alredy exists')
                        else if( status2 === 201 ) resolve('mascota registrado correctamente')
                    }
                
                    xhr2.open('PACTH', 'https://b00tc4mp.herokuapp.com/api/v2/users')
                    xhr2.setRequestHeader('Authorization', 'Bearer ' + token)
                    xhr2.send(JSON.stringify(pets))
                }
            }
        }

        xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')
        xhr.setRequestHeader('Authorization', 'Bearer ' + token)
        xhr.send()
    })
}
export default registerPet