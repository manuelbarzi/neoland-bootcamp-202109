
const modifyPet = (token, petId, pet) => {
    return (async () => {
        if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
        if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

        if (typeof petId !== 'string') throw new TypeError(`${petId} is not a string`)
        if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(petId)) throw new Error('invalid token')
       
         

            const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if (res.status === 200) {

                const res = await fetch("http://localhost:8000/pets/" + petId, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(pet)
                })

                if (res.status === 200) {
                    const petModified = await res.json()
                    return petModified;
                } else if (res.status === 401 || res.status === 404) {
                    const { error } = await res.json()
                    throw new Error(error)
                } else throw new Error('Error Modificando Mascota')

            } else if (res.status === 401 || res.status === 404) {
                const { error } = await res.json()

                throw new Error(error)
            } else throw new Error('Token Error')
        
    })()
}

export default modifyPet