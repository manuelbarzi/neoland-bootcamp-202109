const registerVaccine = (token, vaccine) => {
    return (async () => {
        if (typeof token !== 'string') throw new TypeError(`${token} is not a string`)
        if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token)) throw new Error('invalid token')

        const res = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.status === 200) {
            const postVaccine = await fetch("http://localhost:8000/vaccines/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vaccine)
            })
            if (postVaccine.status === 201) {
                const newVaccine = await postVaccine.json();
                return newVaccine;
            } else if (postVaccine.status === 401 || postVaccine.status === 404) {
                const {
                    error
                } = await postVaccine.json();
                throw new Error(error)
            } else throw new Error('Error Añadiendo Vacunas')

        } else if (res.status === 401 || res.status === 404) {
            const {
                error
            } = await res.json();

            throw new Error(error)
        } else throw new Error('Token Error')

    })()
}

export default registerVaccine