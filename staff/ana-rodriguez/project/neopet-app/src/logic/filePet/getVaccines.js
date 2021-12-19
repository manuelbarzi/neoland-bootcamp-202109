const getVaccines = (token, petId) => {

    if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
    if (typeof petId !== 'number') throw new TypeError(`${petId} is not a number`)

    return (async () => {
        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 200) {

            const getVaccines = await fetch("http://localhost:8000/vaccines?petId=" + petId, {})
            if (getVaccines.status === 200) {

                const vaccines = await getVaccines.json(); // Array de vacunas
                FilePet.vaccines = vaccines; // añado las vacunas al objeto a retornar 
            } else if (getVaccines.status === 401 || getVaccines.status === 404) {
                const { error } = await getVaccines.json()
                throw new Error(error)
            } else throw new Error('Get Vaccine Error')

        } else if (res.status === 401 || res.status === 404) {
            const { error } = await res.json()
            throw new Error(error)
        } else throw new Error('Token Error')

    })()
}

export default getVaccines