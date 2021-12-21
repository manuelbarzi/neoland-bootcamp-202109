const searchClients = (token, client) => {
    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

    if (typeof client !== 'object') throw new TypeError(client + 'is not a string')

    return (async () => {

        const { firstName, lastName, id } = client;
        // check token is valid (by retrieving the user and checking the status)
        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        if (res.status === 200) {
            let url;
            if (firstName && lastName) {
                url = "http://localhost:8000/clients?q=" + firstName + " " + lastName;
            }
            else if (firstName) {
                url = "http://localhost:8000/clients?q=" + firstName
            }
            else if (lastName) {
                url = "http://localhost:8000/clients?q=" + lastName
            }
            else if (id) {
                url = "http://localhost:8000/clients?id=" + id
            }
            const res = await fetch(url, {})

            if (res.status === 200) {
                const clientsResult = await res.json()
                return clientsResult;
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

export default searchClients