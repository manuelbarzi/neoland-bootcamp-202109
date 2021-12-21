// TODO rename file to modify-client.js
const modifyClient = (token, clientId, client) => {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    return (async () => {

        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (res.status === 200) {

            const clientPatch = await fetch('http://localhost:8000/clients/' + clientId, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(client)
            })

            if (clientPatch.status === 200) {
                const clientUpdated = await clientPatch.json();
                return clientUpdated;
            } else if (clientPatch.status === 401 || clientPatch.status === 404) {
                const { error } = await clientPatch.json()
                throw new Error(error)
            } else throw new Error('Error Modificando el cliente')

        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json()
            throw new Error(error)
        } else {
            throw new Error('Token Error')
        }
    })()
}

export default modifyClient