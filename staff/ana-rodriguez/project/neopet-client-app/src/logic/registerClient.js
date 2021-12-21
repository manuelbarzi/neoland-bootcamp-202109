const registerClient = (token, client) => {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')
   
    if (typeof client !== 'object') throw new TypeError('is not a object')

    return (async () => {

        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (res.status === 200) { // status = 200 -> token valid

            const res = await fetch('http://localhost:8000/clients?document=' + client.document, {})

            if (res.status === 200) {
                const exsistsDuplicateClient = await res.json()
                if (exsistsDuplicateClient.length > 0) {
                    // El Cliente ya existe con ese Documento
                    // TODO: Mostrar que el cliente existe, y que no se va a registrar.
                    throw new Error('Cliente con documento ya registrado')
                } else {
                    // Cómo no existe lo registro
                    const res = await fetch('http://localhost:8000/clients', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(client)
                    })
                    if (res.status === 201) {
                        const newClient = await res.json();
                        return newClient;
                    } else if (res.status === 401 || res.status === 404) {
                        const { error } = await res.json()
                        throw new Error(error)
                    } else throw new Error('Error creando cliente')
                };
            } else if (res.status === 401 || res.status === 404) {
                const { error } = await res.json()
                throw new Error(error)
            } else throw new Error('Error recuperando clientes existentes')
        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json()
            throw new Error(error)
        } else throw new Error('Token Error')
  
    })()
}

export default registerClient