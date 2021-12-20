const getWeigths = (token, petId) => {

    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (typeof petId !== 'number') throw new TypeError(`${petId} is not a number`)


    return (async () => {
        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 200) {
            const getWeigths = await fetch("http://localhost:8000/weigth?petId=" + petId, {})

            if (getWeigths.status === 200) {
                const weigth = await getWeigths.json()
                return weigth

            } else if (getWeigths.status === 401 || getWeigths.status === 404) {
                const { error } = await getWeigths.json()
                throw new Error(error)
            } else throw new Error('Get weight Error')

        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json()
            throw new Error(error)
        } else throw new Error('Token Error')

    })()
}

export default getWeigths