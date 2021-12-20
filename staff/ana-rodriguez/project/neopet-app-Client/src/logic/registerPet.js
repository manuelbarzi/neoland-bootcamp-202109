
const registerPet = (token, clientId, pet) => {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof pet !== 'object') throw new TypeError( 'is not a object')
    return (async () => {
        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (res.status === 200) { // status = 200 -> token valid

            const res = await fetch('http://localhost:8000/clients/' + clientId)

            if (res.status === 200) {
                const client = await res.json();

                if (client.id) {
                    // Añadimos el id del cliente a la mascota antes de hacer la petición.
                    pet['client'] = clientId;
                    // El cliente Existe, registramos la mascota
                    const res = await fetch('http://localhost:8000/pets', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(pet)
                    })
                    if (res.status === 201) {
                        const pet = await res.json();
                        return pet;
                    } else if (res.status === 401 || res.status === 404) {
                        const { error } = await res.json()
                        throw new Error(error)
                    } else throw new Error('No se ha podido registrar la mascota')
                } else {
                    throw new Error('El cliente no está registrado')
                };
            } else if (res.status === 401 || res.status === 404) {
                const { error } = await res.json()
                throw new Error(error)
            } else throw new Error('Token error')

        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json()

            throw new Error(error)
        } else throw new Error('unknow error')
    })()
}
export default registerPet