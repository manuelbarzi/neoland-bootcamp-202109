const searchPets = (token, pet) => {

    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (typeof pet !== 'object') throw new TypeError(`Malformed Pet Object`)
    if (pet.name) {
        if (typeof pet.name !== 'string') throw new TypeError(`${pet.name} is not a string`)
        if (/(a-Z0-9){1,}/g.test(pet.name)) throw new Error('Name format error')
    }

    return (async () => {

        const { name, clientId } = pet;
        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 200) { // status = 200 -> token valid
            let url;
            if (name) {
                url = "http://localhost:8000/pets?q=" + name
            } else if (clientId) {
                url = "http://localhost:8000/pets?client=" + clientId
            }
            const res = await fetch(url, {})
            if (res.status === 200) {
                const petsResult = await res.json()
                return petsResult;
            } else if (res.status === 401 || res.status === 404) {
                const { error } = await res.json()
                throw new Error(error)
            } else throw new Error('Search Error')
        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json()
            throw new Error(error)
        } else throw new Error('Token Error')

    })()
}

export default searchPets