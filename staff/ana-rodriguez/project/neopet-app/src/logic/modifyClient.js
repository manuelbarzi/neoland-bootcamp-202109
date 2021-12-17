// TODO rename file to modify-client.js
const modifyClient = (token, clientId, client) => {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof client !== 'string') throw new TypeError(client + 'is not a string')
    
    return (async () => {

            const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if (res.status === 200) {

                const res = await fetch('http://localhost:8000/clients/' + clientId, {})

                if (res.status === 200) {
                    const clientExist = await res.json()
                    if (clientExist.id) {
                        // Existe, entonces modifico.
                        const res = await fetch('http://localhost:8000/clients/' + clientId, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(client)
                        })
                        if (res.status === 200) {
                            const clientUpdated = await res.json();
                            return clientUpdated;
                        } else if (res.status === 401 || res.status === 404) {
                            const { error } = await res.json()
                            throw new Error(error)
                        } else throw new Error('Error Modificando el cliente')
                    } else {

                    }
                } else if (res.status === 401 || res.status === 404) {
                    const { error } = await res.json()
                    throw new Error(error)
                } else throw new Error('Error recuperando cliente existente')
            } else if (res.status === 401 || res.status === 404) {
                const { error } = await res.json()
                throw new Error(error)
            } else throw new Error('Token Error')
        
    })()
}

export default modifyClient