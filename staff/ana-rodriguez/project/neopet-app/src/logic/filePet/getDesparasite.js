const getDesparasite = (token, petId) => {

    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (typeof petId !== 'number') throw new TypeError(`${petId} is not a number`)

    return (async () => {
        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 200) {

            const getDeparasites = await fetch("http://localhost:8000/deparasite?petId=" + petId, {})
            if (getDeparasites.status === 200) {

            } else if (getDeparasites.status === 401 || getDeparasites.status === 404) {
                const { error } = await getDeparasites.json()
                throw new Error(error)
            } else throw new Error('Get Deparasite Error')

        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json()
            throw new Error(error)
        } else throw new Error('Token Error')

    })()

}

export default getDesparasite
